import React from "react";
import { motion } from "framer-motion";
import "../styles/results.css";

const images = {
  left: {
    src: "../../images/backgrounds/services.avif",
    img: "../../images/processed/amplified.png",
    text: "Amplified Group",
    description:
      "Write and manage social media content for Amplified, JBM, Unleashed, and 40 Minute Mentor, creating on-brand posts that promote podcasts, highlight leadership stories, and grow community engagement across LinkedIn and other platforms.",
    link: "https://www.unleashed.company", // add the URL
  },
  rightTop: {
    src: "../../images/backgrounds/services.avif",
    text: "MoxiWorks",
    description:
      "UK launch of a multi-billion-dollar US brand re-entering the market. This meant building the strategy from the ground up — developing sales assets, content marketing, and high-performing blog content to educate, convert, and grow.",
    link: "https://www.moxiworks.com",
  },
  rightBottom: [
    {
      src: "../../images/backgrounds/services.avif",
      text: "Kerfuffle",
      description:
        "Oversee all marketing for Kerfuffle and Relocation Agent Network. Strategy, content, campaigns, and partnerships that keep everything running smoothly.",
      link: "https://www.kerfuffle.com",
    },
    {
      src: "../../images/backgrounds/services.avif",
      text: "Acaboom",
      description:
        "Manage ongoing content and marketing for estate agency software — campaigns, partner comms, and lead generation that stay on-brand and measurable.",
      link: "https://www.acaboom.com",
    },
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
        What i've done
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Over the years I’ve helped brands — big and small — cut through the noise with sharper words, smarter strategy, and consistent marketing that actually gets done.
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
          <div className="gallery-item" onClick={() => window.open(images.left.link, "_blank")}>
            <div className="img-container">
              <img
                src={`./images/backgrounds/${images.left.src}`}
                alt="Left"
                className="fade-image"
              >
              </img>
              <img className="amplified-img" src = {images.left.img}></img>
            </div>

            <div className="overlay-text">
                <h2>{images.left.text}</h2>
                <p>{images.left.description}</p>
            </div>
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
            <div className="gallery-item" onClick={() => window.open(images.rightTop.link, "_blank")}>
            <div className="overlay-text">
                <h2>{images.rightTop.text}</h2>
                <p>{images.rightTop.description}</p>
            </div>
            </div>
          </motion.div>

          <div className="right-bottom">
            {images.rightBottom.map((img, idx) => (
              <motion.div
                key={idx}
                className="gallery-item"
                onClick={() => window.open(img.link, "_blank")}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={idx + 2}
                viewport={{ once: true, amount: 0.2 }}
              >
              <div className="overlay-text">
                  <h2>{img.text}</h2>
                  <p>{img.description}</p>
              </div>              
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
