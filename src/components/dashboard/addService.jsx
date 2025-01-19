import React from 'react';
import AddItem from './addItem';

const AddService = ({ onAdd }) => {
    return (
        <AddItem 
            onAdd={onAdd}
            collectionName="serviceDetails"
            storageFolder="services"
            itemType="Service"
            fields={{ nameOrTitle: "title", imageUrl: "imageUrl" }}
        />
    );
}

export default AddService;
