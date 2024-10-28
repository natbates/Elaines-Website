import React from 'react';
import '../styles/service.css'; // Import the CSS file

const Service = ({ name, description, imageUrl, websiteUrl}) => {
    return (
        <div className="service">
            <a target = "_blank" href = {websiteUrl}>
                <img src={imageUrl} alt={name} className="service-image" />
                <div className="service-info">
                    <h3 className="service-title">{name}</h3>
                    <p className="service-description">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default Service;
