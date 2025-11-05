import React from 'react';
import "../styles/results.css";

// Example image URLs — replace with your own
const images = [
  ["1.png", "2.png", "3.png"], // Left column
  ["4.png", "5.png", "4.png"], // Center column
  ["3.png", "2.png", "1.png"], // Right column
];

const Results = () => {
  return (
    <div id="results-gallery">
      {/* <h1><span className="white-underline">Results</span> I have delivered</h1> */}
      <div className="gallery-container">
        {images.map((columnImages, colIndex) => (
          <div
            key={colIndex}
            className={`gallery-column ${colIndex === 1 ? "center-column" : "side-column"}`}
          >
            {columnImages.map((placeholder, idx) => (
              <div
                key={idx}
                className={`gallery-item gallery-item-${idx + 1}`}
              >
                <img src = {`./images/backgrounds/${placeholder}`} />
                <span className="placeholder-text">{placeholder}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
