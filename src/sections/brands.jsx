import React from "react";
import { motion } from "framer-motion";
import "../styles/brands.css";

// Local brand images (using Clearbit logos)
const brandImages = [
  { url: "https://logo.clearbit.com/github.com", fileName: "GitHub" },
  { url: "https://logo.clearbit.com/google.com", fileName: "Google" },
  { url: "https://logo.clearbit.com/digitalocean.com", fileName: "DigitalOcean" },
  { url: "https://logo.clearbit.com/mlh.io", fileName: "MLH" },
  { url: "https://logo.clearbit.com/netflix.com", fileName: "Netflix" },
  { url: "https://logo.clearbit.com/spotify.com", fileName: "Spotify" },
  { url: "https://logo.clearbit.com/slack.com", fileName: "Slack" },
  { url: "https://logo.clearbit.com/openai.com", fileName: "OpenAI" },
  { url: "https://logo.clearbit.com/airbnb.com", fileName: "Airbnb" },
  { url: "https://logo.clearbit.com/microsoft.com", fileName: "Microsoft" },
  { url: "https://logo.clearbit.com/zoom.us", fileName: "Zoom" },
  { url: "https://logo.clearbit.com/stripe.com", fileName: "Stripe" },
  { url: "https://logo.clearbit.com/atlassian.com", fileName: "Atlassian" },
  { url: "https://logo.clearbit.com/figma.com", fileName: "Figma" },
  { url: "https://logo.clearbit.com/nvidia.com", fileName: "NVIDIA" },
];

const Brands = () => {
  // Fade-in animation variants
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
      id="brands"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Animate heading */}
      <motion.h1 variants={fadeIn}>
        Don’t just take it from me...
      </motion.h1>

      {brandImages.length === 0 ? (
        <motion.div variants={fadeIn}>No brand images available</motion.div>
      ) : (
        <motion.div 
          className="carousel-wrapper" 
          variants={fadeIn}
        >
          <motion.div
            className="brand-carousel"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...brandImages, ...brandImages].map((brand, index) => (
              <div key={index} className="brand">
                <img
                  className="brand-image"
                  src={brand.url}
                  alt={brand.fileName}
                />
                <p>{brand.fileName}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Brands;
