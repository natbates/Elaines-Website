import React from 'react';
import AddItem from './addItem';

const AddBrandImage = ({ onAdd }) => {
    return (
        <AddItem 
            onAdd={onAdd}
            collectionName=""
            storageFolder="brandImages"
            itemType="Brand Image"
            fields={{ imageUrl: "imageUrl" }}
        />
    );
}

export default AddBrandImage;
