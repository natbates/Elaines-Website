import React, { useState, useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../../services/firebaseConfig';
import "../../styles/addItem.css";

const AddItem = ({ onAdd, collectionName, storageFolder, itemType, fields }) => {
    const [formData, setFormData] = useState({
        nameOrTitle: '',
        description: '',
        files: [],
        url: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [screenshotUrl, setScreenshotUrl] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setFormData({ ...formData, files: [...event.target.files] });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchScreenshot = async (url) => {
        const endpoint = `https://v1.nocodeapi.com/natbates/screen/pijXPJPcjkvyfiEt/screenshot?url=${encodeURIComponent(url)}`;

        try {
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error('Failed to fetch screenshot');
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        } catch (error) {
            console.error('Error fetching screenshot:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { nameOrTitle, description, files, url } = formData;

        if (itemType === "Brand Image") {
            if (!files.length) {
                setError('Please upload an image for the brand.');
                return;
            }

            setLoading(true);
            setError('');

            try {
                const imageUrls = [];
                for (let file of files) {
                    const imageRef = ref(storage, `${storageFolder}/images/${file.name}`);
                    await uploadBytes(imageRef, file);
                    const imageUrl = await getDownloadURL(imageRef);
                    imageUrls.push(imageUrl);
                }
                // Call onAdd to refresh the parent component or take action
                onAdd({ imageUrls });

                setFormData({ nameOrTitle: '', description: '', file: null, url: '' });
                if (fileInputRef.current != null) {
                    fileInputRef.current.value = '';
                }
            } catch (error) {
                console.error("Error uploading brand image: ", error);
                setError('Error uploading brand image. Please try again.');
            } finally {
                setLoading(false);
            }

            return;
        
        } else {
            if (!files.length && itemType !== "Sample") {
                setError('Please upload at least one image');
                return;
            }

            setLoading(true);
            setError('');

            try {
                let imageUrl;

                if (itemType === "Sample" && url) {
                    const screenshotUrl = await fetchScreenshot(url);
                    const screenshotBlob = await (await fetch(screenshotUrl)).blob();
                    const screenshotRef = ref(storage, `${storageFolder}/screenshots/${nameOrTitle}.png`);
                    await uploadBytes(screenshotRef, screenshotBlob);
                    imageUrl = await getDownloadURL(screenshotRef);
                    setScreenshotUrl(imageUrl);
                } else {
                    const imageRef = ref(storage, `${storageFolder}/images/${files[0].name}`);
                    await uploadBytes(imageRef, files[0]);
                    imageUrl = await getDownloadURL(imageRef);
                }

                const newItemData = {
                    [fields.nameOrTitle]: nameOrTitle,
                    description: description,
                    [fields.imageUrl]: imageUrl,
                    createdAt: new Date(),
                };

                if (itemType === "Sample" && url) {
                    newItemData['websiteUrl'] = url;
                }

                const docRef = await addDoc(collection(db, collectionName), newItemData);
                onAdd({ id: docRef.id, ...newItemData });
                setFormData({ nameOrTitle: '', description: '', files: [], url: '' });
                if (fileInputRef.current != null) {
                    fileInputRef.current.value = '';
                }
            } catch (error) {
                console.error("Error uploading image or saving data: ", error);
                setError('Error uploading image or saving data. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="add-item-container">
            <h3>Add {itemType}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {itemType !== "Brand Image" && (
                    <>
                        <label>{itemType === "Client" ? "Name" : "Title"}:</label>
                        <input
                            type="text"
                            name="nameOrTitle"
                            value={formData.nameOrTitle}
                            onChange={handleChange}
                            required
                        />
                    </>)}
                </div>
                {itemType !== "Brand Image" && (
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                )}
                {itemType !== "Sample" && (
                <div>
                    <label>Images:</label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        multiple
                        required
                    />
                </div>
                )}
                {itemType === "Sample" && (
                    <div>
                        <label>URL:</label>
                        <input
                            type="url"
                            name="url"
                            value={formData.url}
                            placeholder="https://example.com" 
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : `Add ${itemType}`}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            {screenshotUrl ? (
                <div>
                    <h3>Screenshot:</h3>
                    <img src={screenshotUrl} alt="Screenshot" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            ) : null}
        </div>
    );
};

export default AddItem;
