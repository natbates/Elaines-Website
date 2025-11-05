import "../styles/portfolio.css";
import { ReactComponent as SausageDog } from "../assets/sausagedog.svg";
import { motion } from "framer-motion";

const Portfolio = () => {
  // Animation variants for entry
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.6, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="portfolio-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onClick={() => window.open("https://www.canva.com/design/DAG2f34whrc/R0vkEJQd1aa_gPN0FXMO_w/edit?utm_content=DAG2f34whrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank")}
    >
      <div className="top-line">
        <motion.div
          variants={fadeInUp}
          className="sausage-dog-wrapper"
        >
          <SausageDog className="sausage-dog-animation" />
        </motion.div>

        <motion.h1 variants={fadeInRight}>SEE MY</motion.h1>
      </div>

      <motion.h1
        variants={fadeInUp}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        PORTFOLIO
      </motion.h1>
      {/* <motion.button
        variants={fadeInUp}
        className="portfolio-button"
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        click here to see
      </motion.button> */}
    </motion.div>
  );
};

export default Portfolio;
