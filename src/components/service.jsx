import React from 'react';

const Service = ({ name, description, imageUrl, websiteUrl}) => {
    return (
        <div className="service">
            <img src={imageUrl} className="service-image" />
            <div className="service-info">
                <h3 className="service-title">{name}</h3>
                <p className="service-description">{description}</p>
                <button>Enquire</button>
           </div>
        </div>
    );
};

export default Service;
