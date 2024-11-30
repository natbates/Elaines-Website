import React from 'react';

const Client = ({ name, description, imageUrl }) => {
    return (
        <>
            <img src={imageUrl} alt={name} className="client-image" />
            <div className="client-info">
                <h2 className="client-title">{name}</h2>
                <p className="client-description">{description}</p>
            </div>
        </>
    );
};

export default Client;
