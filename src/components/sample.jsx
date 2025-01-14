import React, { useRef, useEffect } from 'react';

const Sample = ({
  name,
  description,
  imageUrl,
  websiteUrl,
  nextSlide,
  prevSlide,
  showMore,
  setShowReadMore,
}) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const descriptionEl = descriptionRef.current;
    if (descriptionEl) {
      if (showMore) {
        descriptionEl.style.height = `${descriptionEl.scrollHeight}px`;
      } else {
        descriptionEl.style.height = "0px";
      }
    }
  }, [showMore]);

  return (
    <div className="sample">
      <a target="_blank" href={websiteUrl} rel="noopener noreferrer">
        <img src={imageUrl} alt={name} className="sample-image" />
      </a>
      <div className="sample-info">
        <h3 className="sample-title">{name}</h3>
        <div id="sample-button-container">
          <button
            onClick={() => setShowReadMore(!showMore)}
            className="sample-readmore-button"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
          <button className="sample-button" onClick={prevSlide}>
            <img src="svgs/triangle-left.svg" alt="Previous" />
          </button>
          <button className="sample-button" onClick={nextSlide}>
            <img src="svgs/triangle-right.svg" alt="Next" />
          </button>
        </div>
        <div
          ref={descriptionRef}
          className="description-container"
          style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease" }}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Sample;
