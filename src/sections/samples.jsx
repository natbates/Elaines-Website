import React from "react";
import { motion } from "framer-motion";
import "../styles/samples.css";

const Samples = () => {
  const sampleImages = [
    { title: "Content Strategy", imageUrl: "/images/devices/kato.png" },
    { title: "Editorial Work", imageUrl: "/images/devices/kerfuffle-2.png" },
    { title: "B2B Whitepaper", imageUrl: "/images/devices/kerfuffle.png" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div id="samples">
      {/* Animate main title */}
      <motion.h1
        className="samples-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Recent Work
      </motion.h1>

      {/* Grid of sample items */}
      <div className="samples-grid">
        {sampleImages.map((sample, index) => (
          <motion.div
            key={index}
            className="sample-item"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="sample-text">
              <h2>{sample.title}</h2>
            </div>
            <img src={sample.imageUrl} alt={sample.title} className="sample-image" />
          </motion.div>
        ))}
      </div>
      <div className="bottom-border"></div>
    </div>
  );
};

export default Samples;
