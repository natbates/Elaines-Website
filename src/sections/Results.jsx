import React from "react";
import { motion } from "framer-motion";
import "../styles/results.css";

const images = {
  left: { src: "11.png", text: "Left Project" },
  rightTop: { src: "12.png", text: "Top Project" },
  rightBottom: [
    { src: "31.png", text: "Bottom Left" },
    { src: "14.png", text: "Bottom Right" },
  ],
};

const Results = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div id="results-gallery">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What I have done
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam.
      </motion.p>

      <div className="gallery-container">
        {/* Left side */}
        <motion.div
          className="left-side"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="gallery-item">
            <img
              src={`./images/backgrounds/${images.left.src}`}
              alt="Left"
              className="fade-image"
            />
            <div className="overlay-text">{images.left.text}</div>
          </div>
        </motion.div>

        {/* Right side */}
        <div className="right-side">
          <motion.div
            className="right-top"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="gallery-item">
              <img
                src={`./images/backgrounds/${images.rightTop.src}`}
                alt="Right Top"
                className="fade-image"
              />
              <div className="overlay-text">{images.rightTop.text}</div>
            </div>
          </motion.div>

          <div className="right-bottom">
            {images.rightBottom.map((img, idx) => (
              <motion.div
                key={idx}
                className="gallery-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={idx + 2}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={`./images/backgrounds/${img.src}`}
                  alt={`Right Bottom ${idx}`}
                  className="fade-image"
                />
                <div className="overlay-text">{img.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
