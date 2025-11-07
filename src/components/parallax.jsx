import { useEffect, useRef } from "react";
import "../styles/parallax.css";

const Parallax = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const layers = section.querySelectorAll(".layer");
    const totalLayers = layers.length;

    const baseSpeed = 140; // overall intensity

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // ✅ Normalized scroll progress between 0 → 1
      let scrollProgress = Math.min(
        Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0),
        1
      );

      // ✅ Apply an ease-out curve for smoother start + stronger middle motion
      // This makes the effect weaker near the top, faster as you scroll down
      const easedProgress = Math.pow(scrollProgress, 3);

      layers.forEach((layer, index) => {
        if (layer.classList.contains("layer5")) {
          layer.style.transform = `translateY(0px)`;
          return;
        }

        // Back layers move faster
        const depth = totalLayers - index / 1.3;
        const speed = baseSpeed * (depth / totalLayers) * 3;

        // Amplify movement in the middle range, but ease near top
        const translateY = easedProgress * speed;

        layer.style.transform = `translateY(${translateY}px)`;
      });
    };

    // ✅ Run once initially (after paint)
    requestAnimationFrame(updateParallax);

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);

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
