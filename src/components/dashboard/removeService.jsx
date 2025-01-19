import React from 'react';
import RemoveItem from './removeItem';

const RemoveService = ({ serviceItems, onFetch }) => {
    return (
        <RemoveItem 
            items={serviceItems}
            collectionName="serviceDetails"
            storageFolder="services"
            onFetch={onFetch}
            itemType="Service"
        />
    );
}

export default RemoveService;
