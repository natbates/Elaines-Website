import React from 'react';
import AddItem from './addItem';

const AddClient = ({ onAdd }) => {
    return (
        <AddItem 
            onAdd={onAdd}
            collectionName="clientDetails"
            storageFolder="clients"
            itemType="Client"
            fields={{ nameOrTitle: "name", imageUrl: "image" }}
        />
    );
}

export default AddClient;
