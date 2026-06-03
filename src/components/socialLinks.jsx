import "../styles/socialLinks.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SocialLinks = () => {
  return (
    <motion.div
      id="social-links"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/elaine-keep/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        variants={itemVariants}
      >
        <img
          src="images/processed/linkedin.svg"
          alt="LinkedIn"
          className="social-icon"
        />
      </motion.a>

      {/* Authory */}
      <motion.a
        href="https://authory.com/ElaineKeep"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Authory"
        variants={itemVariants}
      >
        <img
          src="images/processed/authlogo.png"
          alt="Authory"
          className="social-icon"
        />
      </motion.a>

      {/* Canva */}
      <motion.a
        href="/files/Elaine Portfolio 2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Canva"
        variants={itemVariants}
      >
        <img
          src="../../images/processed/PDF.svg"
          alt="Canva"
          className="social-icon"
        />
      </motion.a>
    </motion.div>
  );
};

export default SocialLinks;
