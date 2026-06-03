import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import Services from "../sections/services";
import Results from "../sections/Results";
import Experience from "../sections/Experience";
import Stats from "../sections/Stats";
import ConnectArrow from "../assets/Cool Arrows/Layer 4.png";
import "../styles/homepage.css";
import { motion } from "framer-motion";
import SocialLinks from "../components/socialLinks";

const SocialIntro = () => {
  const sectionViewport = {
    once: true,
    amount: 0.4,
    margin: "0px 0px -15% 0px",
  };

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
        viewport={sectionViewport}
        style={{
            willChange: "opacity, transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
        }}
        >
        14+ years in marketing in SaaS, HR and tech
        </motion.p>

        <div className="social-intro-connect-wrap">
          <motion.a
            id="social-intro-connect"
            href="https://www.linkedin.com/in/elaine-keep/"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.15 }}
            style={{
              willChange: "opacity, transform",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            Connect now
          </motion.a>

          <motion.img
            className="social-intro-connect-arrow social-intro-connect-arrow--left"
            src={ConnectArrow}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.18 }}
          />

          <motion.img
            className="social-intro-connect-arrow social-intro-connect-arrow--right"
            src={ConnectArrow}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.22 }}
          />

          <motion.img
            className="social-intro-connect-arrow social-intro-connect-arrow--below-1"
            src={ConnectArrow}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.26 }}
          />

          <motion.img
            className="social-intro-connect-arrow social-intro-connect-arrow--below-2"
            src={ConnectArrow}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.3 }}
          />

          <motion.img
            className="social-intro-connect-arrow social-intro-connect-arrow--below-3"
            src={ConnectArrow}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ delay: 0.34 }}
          />
        </div>

      <motion.div
        className="line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={sectionViewport}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.4,
        }}
        style={{ transformOrigin: "left" }}
      />

      <div className="social-intro-links">
        <SocialLinks />
      </div>
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
                <Services />
                <Stats />
                <Experience />
                <Results /> 
                <Brands />
                <Clients /> 
                <Samples /> 
            </div>


        </div>
    );
};

export default Home;