import React from 'react';
import RemoveItem from './removeItem';

const RemoveBrandImage = ({ brandImages, onFetch }) => {
    return (
        <RemoveItem 
            items={brandImages}
            collectionName=""
            storageFolder="brandImages"
            onFetch={onFetch}
            itemType="Brand Image"
        />
    );
}

export default RemoveBrandImage;
