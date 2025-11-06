import "../styles/intro.css";
import SocialLinks from "../components/socialLinks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Parallax from "../components/parallax";

const Intro = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "ease" } },
  };

  return (
    <div id="intro">
      <Parallax />

      <div id="intro-items">
        <div id="intro-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            B2B
          </motion.h1>
          <motion.h1
            className="middle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            COPY
          </motion.h1>
          <motion.h1
            className="last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WRITING
          </motion.h1>
        </div>

        {/* Social intro text + links */}
        <div id="social-intro-holder">
          <motion.p
            id="social-intro-text"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            14 + years in marketing in SaaS, HR and tech
          </motion.p>

          <motion.div
            className="line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <motion.div
            className="social-intro-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
