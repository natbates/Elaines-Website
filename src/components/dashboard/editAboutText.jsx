import React, { useState, useEffect } from 'react';
import { getDocs, collection, doc, updateDoc, setDoc } from 'firebase/firestore';
import { storage, db } from '../../services/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from 'firebase/storage'; // Import necessary functions
import "../../styles/editAboutText.css";

const EditAboutText = () => {
    const [aboutText, setAboutText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [docId, setDocId] = useState(''); // State to hold the document ID
    const [imageFile, setImageFile] = useState(null); // State to hold the image file
    const [imageURL, setImageURL] = useState(null); // State to hold the image file

    // Fetch the about text when the component mounts
    useEffect(() => {
        fetchAboutText();
    }, []);

    // Fetch about text from Firestore
    const fetchAboutText = async () => {
        const dbCollection = collection(db, 'about'); // Reference to your Firestore collection
        try {
            const querySnapshot = await getDocs(dbCollection);
            const items = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            // If there are items, set the state; otherwise, create a new document
            if (items.length > 0) {
                const cleanedString = items[0].text.replace(/^"|"$/g, ''); // Remove leading and trailing quotes if necessary
                setAboutText(cleanedString);
                setDocId(items[0].id); // Store the document ID for future updates
                setImageURL(items[0].image);

            } else {
                // No document found, create one with default content
                const defaultText = "Your default about text here."; // Change this as needed
                const newDocRef = doc(collection(db, 'about'));
                await setDoc(newDocRef, { text: defaultText }); // Create a new document with default text
                setAboutText(defaultText);
                setDocId(newDocRef.id); // Store the new document ID
                console.log('New about text document created:', newDocRef.id);
            }
        } catch (err) {
            console.error('Error fetching about text:', err);
            setError('Failed to fetch about text. Please try again later.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Clear the folder by deleting all files in it
    const clearFolder = async (folderPath) => {
        const storage = getStorage();
        const folderRef = ref(storage, folderPath);
        
        try {
            const listResult = await listAll(folderRef);
            const deletePromises = listResult.items.map((itemRef) => deleteObject(itemRef));
            await Promise.all(deletePromises); // Delete all files in the folder
            console.log('Folder cleared successfully.');
        } catch (error) {
            console.error('Error clearing folder:', error);
        }
    };

    // Handle form submission to update about text and image
    const handleSetAboutText = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Check if docId is available
            if (!docId) {
                throw new Error('No document ID available to update.');
            }

            // Clear the existing images from the folder
            await clearFolder('about-image'); // Replace with your folder path

            // Upload the new image if selected
            let imageUrl = '';
            if (imageFile) {
                const storage = getStorage();
                const storageRef = ref(storage, `about-image/${imageFile.name}`); // Adjust the path as necessary

                // Upload the file
                await uploadBytes(storageRef, imageFile);

                // Get the download URL of the uploaded image
                imageUrl = await getDownloadURL(storageRef);
            }

            // Update the document with the new about text and image URL
            await updateDoc(doc(db, 'about', docId), {
                text: aboutText, // Update with new text
                image: imageUrl // Add the new image URL
            });
            
            console.log("settingImageUrl");
            setImageURL(imageUrl);
            alert('Website updated successfully!');

        } catch (error) {
            console.error("Error modifying about text: ", error);
            setError('Error modifying about text. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="edit-about-text">
            {loading ? (
                <p>Loading existing about text...</p>
            ) : (
                <form onSubmit={handleSetAboutText}>
                    <div>
                        <label>New About Text:</label>
                        <textarea
                            value={aboutText}
                            onChange={(e) => setAboutText(e.target.value)}
                            required
                            rows="4"
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                    <div>
                        <label>Upload About Image:</label>
                        <input
                            type="file"
                            accept="image/*" // Only allow image files
                            onChange={(e) => setImageFile(e.target.files[0])} // Set the selected image file
                        />
                    </div>
                    {false ? 
                    <div id = "about-image-edit">
                        <p>Image</p>
                        <img src = {imageURL}></img>
                    </div> : null }
                    <button type="submit" disabled={loading}>
                        {loading ? 'Changing...' : 'Set About Text and Image'}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            )}
        </div>
    );
};

export default EditAboutText;
