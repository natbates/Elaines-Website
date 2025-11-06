import React, { useEffect, useRef } from "react";
import "../styles/samples.css";

const Samples = () => {
  const sampleImages = [
    { title: "Content Strategy", imageUrl: "/images/devices/kato.png" },
    { title: "Editorial Work", imageUrl: "/images/devices/kerfuffle-2.png" },
    { title: "B2B Whitepaper", imageUrl: "/images/devices/kerfuffle.png" },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".sample-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div id="samples">
      <h1 className="samples-title">
        Recent <span className="pink-underline">Works</span>
      </h1>

      <div className="samples-grid" ref={containerRef}>
        {sampleImages.map((sample, index) => (
          <div key={index} className="sample-item">
            <div className="sample-text">
              <h2>{sample.title}</h2>
            </div>
            <img src={sample.imageUrl} alt={sample.title} className="sample-image" />
          </div>
        ))}
      </div>
      <div className="bottom-border"></div>
    </div>
  );
};

export default Samples;
