import React, { useState } from 'react';
import { ref, deleteObject } from 'firebase/storage';
import { deleteDoc, doc } from 'firebase/firestore';
import { storage, db } from '../../services/firebaseConfig';
import "../../styles/removeItem.css";

const RemoveItem = ({ items, collectionName, storageFolder, onFetch, itemType }) => {
    const [error, setError] = useState('');

    const removeImage = async (imageUrl) => {
        try {
            const decodedUrl = decodeURIComponent(imageUrl);
            const fileName = decodedUrl.split('/').pop().split('?')[0]; 
            const imageRef = ref(storage, `${storageFolder}/images/${fileName}`);

            console.log(`Attempting to delete image at: ${imageRef.fullPath}`);
            await deleteObject(imageRef);
            console.log(`Successfully deleted image: ${fileName}`);
            return true; // Indicate success
        } catch (err) {
            console.error('Error removing image:', err);
            setError(`Failed to remove the image. Please try again later.`);
            return false; // Indicate failure
        }
    };

    const removeDocument = async (id) => {
        try {
            await deleteDoc(doc(db, collectionName, id));
            console.log(`Successfully deleted document with ID: ${id}`);
            return true; // Indicate success
        } catch (err) {
            console.error('Error removing document:', err);
            setError(prev => `${prev} Failed to remove the document. Please try again later.`);
            return false; // Indicate failure
        }
    };

    const removeItem = async (id, imageUrl) => {
        let success = true;

        // Handle Brand Image removal
        if (itemType === "Brand Image") {
            success = await removeImage(imageUrl);
        } else {
            // Handle Firestore Document and associated Image removal
            const imageRemoved = await removeImage(imageUrl);
            const docRemoved = await removeDocument(id);
            success = imageRemoved && docRemoved;
        }

        onFetch();
    };

    if (items === undefined) { 
        return <p>Error Loading {itemType.toLowerCase()}...</p>;
    }
    
    return (
        <div className="remove-item-container">
            <h3>Remove {itemType}</h3>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {items.length === 0 ? (
                <p>No {itemType.toLowerCase()}s...</p>
            ) : (
                itemType === "Brand Image" ? (
                    <div className="brand-images-grid">
                        {items.map((item, index) => (
                            <div key={index} className="brand-image-container">
                                <img 
                                    src={item} 
                                    alt={`Brand ${index + 1}`} 
                                    onClick={() => removeItem(null, item)} 
                                    className="remove-brand-image clickable" 
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="scrollable-list">
                        <ul>
                            {items.map((item, index) => (
                                <li key={item.id || index} className="item">
                                    <div className="item-container">
                                        <h3>{item.title || item.name}</h3>
                                        <button onClick={() => removeItem(item.id, item.imageUrl || item)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            )}
        </div>
    );
}

export default RemoveItem;
