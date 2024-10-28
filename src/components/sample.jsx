import React from 'react';
import '../styles/sample.css'; // Import the CSS file

const Sample = ({ name, description, imageUrl, websiteUrl}) => {
    return (
        <div className="sample">
            <a target = "_blank" href = {websiteUrl}>
                <img src={imageUrl} alt={name} className="sample-image" />
                <div className="sample-info">
                    <h3 className="sample-title">{name}</h3>
                    <p className="sample-description">{description}</p>
                </div>
            </a>
        </div>
    );
};

export default Sample;
