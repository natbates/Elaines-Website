import "../styles/about.css";
import React from "react";
import { motion } from "framer-motion";
import AboutArrow from "../assets/Cool Arrows/Layer 3.png";

const AboutMe = () => {
  const images = [
    "/images/elaine/about/family.jpg",
    "/images/elaine/about/milo.jpg",
    "/images/elaine/about/car.png",
    "/images/elaine/about/charity.png",
  ];

  // Variants for staggered animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variant for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variant for images
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div id="about-me-page">
      <motion.img
        className="page-decor-arrow page-decor-arrow--about"
        src={AboutArrow}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      />

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1 className="main-text" variants={textVariants}>
         A bit more about me...
        </motion.h1>
        <motion.p variants={textVariants}>
          From crafting impactful email sequences to long-form blog posts,
          landing pages, and web copy, I specialize in helping businesses
          connect with their audience in meaningful ways. I’ve worked with
          clients across industries—from innovative fintech startups to
          global e-commerce giants—driving traffic, boosting conversions, and
          delivering results that matter. When I’m not writing, you’ll find me
          running (currently training for my next 10K), enjoying my quirky
          collection of handbags, or spending time with my family. I live in a
          busy household with my engineer husband, a golden retriever, and a
          seven-year-old son who keeps me on my toes. I&apos;m also a huge fan of
          podcasts and love a good cup of tea with biscuits (preferably more
          biscuits than tea). Oh, and my weekend car? A 1991 Nissan Figaro
          named Betty—she’s a total joy to drive! Currently, I’m working toward
          an Executive Diploma in HR Strategy with the MTF Institute, always
          seeking to learn and grow both professionally and personally.
        </motion.p>

        {/* Animated 2x2 image grid */}
        <motion.div className="about-images-grid" variants={containerVariants}>
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="grid-image-wrapper"
              variants={imageVariants}
            >
              <img src={src} alt={`About me ${idx + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
