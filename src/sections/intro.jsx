import "../styles/intro.css";
import { motion } from "framer-motion";
import Parallax from "../components/parallax";

const Intro = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div id="intro">
      <Parallax />

      <div id="intro-items">
        <div id="intro-text">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              transform: "translate3d(0,0,0)", // GPU layer
              willChange: "opacity, transform",
            }}
          >
            <motion.h1 variants={childVariants} style={{ transform: "translate3d(0,0,0)" }}>B2B</motion.h1>
            <motion.h1 variants={childVariants} className="middle" style={{ transform: "translate3d(0,0,0)" }}>CONTENT</motion.h1>
            <motion.h1 variants={childVariants} className="last" style={{ transform: "translate3d(0,0,0)" }}>WRITING</motion.h1>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Intro;
