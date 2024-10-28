import React from 'react';
import '../styles/client.css'; // Import the CSS file

const Client = ({ name, description, imageUrl, isCenter }) => {
    return (
        <div className={`client ${isCenter ? 'center' : 'side'}`}>
            <img src={imageUrl} alt={name} className="client-image" />
            <div className="client-info">
                <h2 className="client-title">{name}</h2>
                <p className="client-description">{description}</p>
            </div>
        </div>
    );
};

export default Client;
