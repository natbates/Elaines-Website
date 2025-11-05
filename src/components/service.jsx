import React from 'react';

const Service = ({ name, description, direction, imageUrl, font }) => {
    const isLeft = direction === 'left';

    return (
        <div className={`service ${isLeft ? 'image-left' : 'image-right'}`}>
            {isLeft && <img src={imageUrl} className="service-image" alt="Service" />}
            <div className={`service-info ${direction}`}>
                <h3 className="service-title" style={{ fontFamily: font }}>{name}</h3>
                <p className="service-description">{description}</p>
            </div>
            <div className='service-background'></div>
            {!isLeft && <img src={imageUrl} className="service-image" alt="Service" />}
        </div>
    );
};

export default Service;
