import React from 'react';

const Sample = ({ name, description, imageUrl, websiteUrl, nextSlide, prevSlide}) => {
    return (
        <div className="sample">
            <a target = "_blank" href = {websiteUrl}>
                <img src={imageUrl} alt={name} className="sample-image" />
            </a>
            <div className="sample-info">
                <h3 className="sample-title">{name}</h3>
                <div id="sample-button-container">
                        <button className="sample-readmore-button">Read More</button>
                        <button className="sample-button" onClick={prevSlide}>
                            <img src="svgs/triangle-left.svg" alt="Previous" />
                        </button>
                        <button className="sample-button" onClick={nextSlide}>
                            <img src="svgs/triangle-right.svg" alt="Next" />
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Sample;
