import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "../styles/parallax.css";

const Parallax = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Animate content when visible
        if (!hasAnimated && sectionTop < windowHeight * 0.9) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } });
        setHasAnimated(true);
        }

        // Parallax layers
        if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        const width = window.innerWidth;
        const speedFactor = Math.min(Math.max(width / 1000, 0.5), 2);

        const layers = section.querySelectorAll(".layer");
        const totalLayers = layers.length;

        layers.forEach((layer, index) => {
            // Keep layer5 (front-most) fixed
            if (layer.classList.contains("layer5")) {
                layer.style.transform = `translateY(0px)`;
                return;
            }

            const depthMultiplier = totalLayers - index * 1.3; // back layers move faster
            const baseSpeed = depthMultiplier * 80;
            const speed = baseSpeed * speedFactor;
            const translateY = scrollProgress * speed;

            layer.style.transform = `translateY(${translateY}px)`;
        });
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
    }, [controls, hasAnimated]);



  return (
    <section className="parallax" ref={sectionRef}>
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="layer layer4"></div>
      <div className="layer layer5"></div>

      {/* Bottom overlay to hide any exposed space dynamically */}

        <motion.div
            className="parallax-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >

            <h2>Bringing Your Content to Life</h2>
            <p>Engaging narratives that captivate and convert.</p>
            {/* <button className="parallax-button" onClick={() => {}}>See How</button> */}
        </motion.div>

            <div className="app-buttons">
                <div className="close"></div>
                <div className="minimize"></div>
                <div className="maximize"></div>
            </div>
    </section>
  );
};

export default Parallax;
