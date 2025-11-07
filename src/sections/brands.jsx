import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import "../styles/brands.css";


const Brands = () => {

  const [brands, setBrands] = useState([]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

    useEffect(() => {
        const importAll = (r) => r.keys().map(r);
        const images = importAll(require.context("../assets/brands", false, /\.(png|jpe?g|gif)$/));
        setBrands(images);
        console.log(images);
    }, []);

  return (
    <motion.div
      id="brands"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <motion.h1 variants={fadeIn}>Don’t just take it from me...</motion.h1>

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
              <img src={brand} alt="Fuck" className="brand-image" />
              <p>{brand.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Brands;
