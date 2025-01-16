import React from 'react';

const Service = ({ name, description, imageUrl, websiteUrl, direction = 'left' }) => {
    const isLeft = direction === 'left';

    return (
        <div className={`service ${isLeft ? 'image-left' : 'image-right'}`}>
            {isLeft && <img src={imageUrl} className="service-image" alt="Service" />}
            <div className="service-info">
                <h3 className="service-title">{name}</h3>
                <p className="service-description">{description}</p>
                <button>Enquire</button>
            </div>
            <div className='service-background'></div>
            {!isLeft && <img src={imageUrl} className="service-image" alt="Service" />}
        </div>
    );
};

export default Service;
