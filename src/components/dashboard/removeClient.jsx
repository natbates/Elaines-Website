import React from 'react';
import RemoveItem from './removeItem';

const RemoveClient = ({ clientItems, onFetch }) => {
    return (
        <RemoveItem 
            items={clientItems}
            collectionName="clientDetails"
            storageFolder="clients"
            onFetch={onFetch}
            itemType="Client"
        />
    );
}

export default RemoveClient;
