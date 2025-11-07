import React from "react";
import { motion } from "framer-motion";
import "../styles/portfolio.css";

const Portfolio = () => {
  // Motion variants for fade-in
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      className="portfolio-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onClick={() =>
        window.open(
          "https://www.canva.com/design/DAG2f34whrc/R0vkEJQd1aa_gPN0FXMO_w/edit?utm_content=DAG2f34whrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
          "_blank"
        )
      }
    >
      {/* Animate the title */}
      <motion.h1 
        className="portfolio-heading"
        variants={fadeIn}
      >
        My Portfolio
      </motion.h1>

      {/* Image/Video wrapper with motion */}
      <motion.div 
        className="portfolio-image-wrapper" 
        variants={fadeIn}
      >
        <img
          className="portfolio-image"
          src="images/backgrounds/portfolio.png"
        />
        <motion.div 
          className="portfolio-text" 
          variants={fadeIn}
        >
          <div className="squiggle">
              <h3>SEE MY PORTFOLIO</h3>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
