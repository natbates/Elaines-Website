import { useEffect, useRef } from "react";
import "../styles/parallax.css";

const Parallax = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const layers = section.querySelectorAll(".layer");
    const totalLayers = layers.length;
    const windowHeight = window.innerHeight;

    const width = window.innerWidth;
    const speedFactor = Math.min(width / 1500);

    // ----> Define a reusable update function
    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const scrollProgress = Math.min(
        Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0),
        1
      );

      layers.forEach((layer, index) => {
        if (layer.classList.contains("layer5")) {
          layer.style.transform = `translateY(0px)`;
          return;
        }

        const depthMultiplier = totalLayers - index * 1.5;
        const baseSpeed = depthMultiplier * 40;
        const speed = baseSpeed * speedFactor;
        const translateY = scrollProgress * speed;

        layer.style.transform = `translateY(${translateY}px)`;
      });
    };

    // ----> Fix: Run the update *after paint* to avoid jump
    requestAnimationFrame(updateParallax);

    // Add scroll listener
    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);

    // Clean up
    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
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
