import React from "react";
import { motion } from "framer-motion";
import "../styles/samples.css";
import SectionHeader from "../components/common/SectionHeader/sectionHeader";

const Samples = () => {
  const sampleImages = [
    { title: "Content Strategy", imageUrl: "/images/devices/kato.png" },
    { title: "Email Marketing", imageUrl: "/images/devices/kerfuffle-2.png" },
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

      <SectionHeader
        title="Recent Works"
        subtitle="Over the years I've helped brands — big and small — cut through the noise with sharper words, smarter strategy, and consistent marketing that actually gets done."
      />

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
