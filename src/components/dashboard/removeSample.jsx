import React from 'react';
import RemoveItem from './removeItem';

const RemoveSample = ({ sampleItems, onFetch }) => {
    return (
        <RemoveItem 
            items={sampleItems}
            collectionName="sampleDetails"
            storageFolder="samples"
            onFetch={onFetch}
            itemType="Sample"
        />
    );
}

export default RemoveSample;
