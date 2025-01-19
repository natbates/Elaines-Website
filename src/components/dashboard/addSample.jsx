import React from 'react';
import AddItem from './addItem';

const AddSample = ({ onAdd }) => {
    return (
        <AddItem 
            onAdd={onAdd}
            collectionName="sampleDetails"
            storageFolder="samples"
            itemType="Sample"
            fields={{ nameOrTitle: "title", imageUrl: "imageUrl" }}
        />
    );
}

export default AddSample;
