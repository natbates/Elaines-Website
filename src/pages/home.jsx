import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import Services from "../sections/services";
import Results from "../sections/Results";
import Experience from "../sections/Experience";
import "../styles/homepage.css";

import { motion } from "framer-motion";
import SocialLinks from "../components/socialLinks";
import Stats from "../sections/Stats/Stats";

const SocialIntro = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="social-intro-holder">
        <motion.p
        id="social-intro-text"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        style={{
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
        }}
        >
        14+ years in marketing in SaaS, HR and tech
        </motion.p>

      <motion.div
        className="line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.4,
        }}
        style={{ transformOrigin: "left" }}
      />

      <motion.div
        className="social-intro-links"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.17}}
        style={{
          willChange: "opacity, transform",
          transform: "translateZ(0)",
        }}
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
};


const Home = () =>
{
    return(
        <div className="home-page">
            <Intro />
            <div className="page-background">
                <SocialIntro />
                <Experience />
                <Services />
                <Stats />
                <Results /> 
                <Brands />
                <Clients /> 
                <Samples /> 
            </div>


        </div>
    );
};

export default Home;