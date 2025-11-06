import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import About from "../sections/About";
import Services from "../sections/services";
import Results from "../sections/Results";
import Parallax from "../components/parallax";
import Portfolio from "../sections/Portfolio";
import "../styles/homepage.css";

import { motion } from "framer-motion";
import SocialLinks from "../components/socialLinks";

const SocialIntro = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: "easeOut", // ✅ use valid ease
      },
    },
  };

  return (
    <div id="social-intro-holder">
      {/* Smooth fade-in text */}
        <motion.p
        id="social-intro-text"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // ✅ only runs once when visible
        style={{
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
        }}
        >
        14+ years in marketing in SaaS, HR and tech
        </motion.p>

      {/* Animated line under text */}
      <motion.div
        className="line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.4, // ✅ slight delay, no overlap repaint
        }}
        style={{ transformOrigin: "left" }}
      />

      {/* Social links fade-up */}
      <motion.div
        className="social-intro-links"
        initial={{ opacity: 0, x: -10 }}
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
        <>
            <Intro />
{/* 
            {/* <div id = "intro-curve">

            </div> */}

            {/* <About />  */}
            <div className="page-background">
                <SocialIntro />
                <Services />
                <Portfolio />
                <Results /> 
                <Brands />
                <Clients /> 
                <Samples /> 
            </div>

            {/*

            <Parallax />
            <Results /> 
            <Clients />        

            <Brands />
            <Samples />   */}
        </>
    );
};

export default Home;