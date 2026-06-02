import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "../styles/brands.css";
import SectionHeader from "../components/common/SectionHeader/sectionHeader";


const Brands = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const brands = useMemo(() => {
    const importAll = (r) => r.keys().map(r);
    return importAll(require.context("../brands", false, /\.(png|jpe?g|gif)$/));
  }, []);

  return (
    <motion.div
      id="brands"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <SectionHeader
        title="Who are they?"
        subtitle="A selection of brands I’ve supported across content, campaigns, SEO, and brand storytelling."
      />

      <div className="carousel-wrapper">
        <motion.div
          className="brand-carousel"
          animate={{ x: ["0%", "-50%"] }} // infinite scroll
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand">
              <img
                src={brand}
                alt={brand.split("/").pop()?.replace(/\.[^.]+$/, "") || "Brand logo"}
                className="brand-image"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;
