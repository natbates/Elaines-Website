import { useEffect, useRef } from "react";
import "../styles/parallax.css";

const Parallax = () => {
  const sectionRef = useRef(null);
  const publicUrl = process.env.PUBLIC_URL || "";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const layers = section.querySelectorAll(".layer");
    const totalLayers = layers.length;

    const minWidth = 450;
    const maxWidth = 1230;
    const minSpeed = 50;
    const maxSpeed = 120;

    const clamp01 = (value) => Math.min(Math.max(value, 0), 1);
    const getBaseSpeed = () => {
      const viewportWidth = window.innerWidth;
      const t = clamp01((viewportWidth - minWidth) / (maxWidth - minWidth));
      return minSpeed + (maxSpeed - minSpeed) * t;
    };

    const updateParallax = () => {
      const baseSpeed = getBaseSpeed();

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
      const easedProgress = Math.pow(scrollProgress, 2.5);

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
      <div
        className="layer layer1"
        style={{ backgroundImage: `url(${publicUrl}/images/parallax/5.PNG)` }}
      ></div>
      <div
        className="layer layer2"
        style={{ backgroundImage: `url(${publicUrl}/images/parallax/4.PNG)` }}
      ></div>
      <div
        className="layer layer3"
        style={{ backgroundImage: `url(${publicUrl}/images/parallax/3.PNG)` }}
      ></div>
      <div
        className="layer layer4"
        style={{ backgroundImage: `url(${publicUrl}/images/parallax/2.PNG)` }}
      ></div>
      <div
        className="layer layer5"
        style={{ backgroundImage: `url(${publicUrl}/images/parallax/1.PNG)` }}
      ></div>
    </section>
  );
};

export default Parallax;
