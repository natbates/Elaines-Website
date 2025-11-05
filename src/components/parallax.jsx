import { useEffect, useRef, useState } from "react";
import "../styles/parallax.css";

const Parallax = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    const layers = section.querySelectorAll(".layer");
    const totalLayers = layers.length;

    const width = window.innerWidth;
    const speedFactor = Math.min(width/1500);

    // Calculate scroll progress for initial load
    const scrollProgress = Math.min(Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0), 1);

    layers.forEach((layer, index) => {
      if (layer.classList.contains("layer5")) {
        layer.style.transform = `translateY(0px)`; // front-most layer fixed
        return;
      }

      const depthMultiplier = totalLayers - index * 2; // back layers move faster
      const baseSpeed = depthMultiplier * 25;
      const speed = baseSpeed * speedFactor;
      const translateY = scrollProgress * speed;

      // Set initial position
      layer.style.transform = `translateY(${translateY}px)`;
    });

    // Scroll event for live parallax
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.min(Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0), 1);

      layers.forEach((layer, index) => {
        if (layer.classList.contains("layer5")) return;

        const depthMultiplier = totalLayers - index * 1.5;
        const baseSpeed = depthMultiplier * 40;
        const speed = baseSpeed * speedFactor;
        const translateY = scrollProgress * speed;

        layer.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax" ref={sectionRef}>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="layer layer4"></div>
      <div className="layer layer5"></div>
    </section>
  );
};

export default Parallax;
