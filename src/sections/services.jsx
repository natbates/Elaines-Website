import React from 'react';
import { motion } from 'framer-motion';
import Service from '../components/service';
import "../styles/services.css";

const Services = () => {
  // Static services data
  const services = [
    {
      id: 1,
      title: "Content Revisions",
      image: "/images/backgrounds/1.png",
    },
    {
      id: 2,
      title: "B2B Whitepapers",
      image: "/images/backgrounds/2.png",
    },
    {
      id: 3,
      title: "Downloads",
      image: "/images/backgrounds/3.png",
    },
    {
      id: 4,
      title: "B2B Whitepapers and Downloads",
      image: "/images/backgrounds/5.png",
    },
  ];

  // Fonts for each service
  const fonts = ["BoldFont", "BoldFont", "BoldFont", "BoldFont"];

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div id="services">
      <div id="services-background"></div>
      <div id="services-content">
        <div id="services-text">
          <div className='top-line-service'>
            <h1 className="main-text">What I can do for <span className="pink-underline">you</span></h1>
          </div>
          <p className="sub-text">
            I turn my hand to brochures, white papers, blogs, articles, script writing, internal comms, and beyond. However, here are my key strengths.
          </p>
        </div>

        <div id="service-container">
          {/* Left column */}
          <div className="service-column">
            {[services[0], services[2]].map((service, i) => (
              <motion.div
                key={service.id}
                className={`service-item ${i === 0 ? "tall" : ""}`}
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <Service
                  name={service.title}
                  font={fonts[i * 2]}
                  direction="left"
                  imageUrl={service.image}
                />
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="service-column">
            {[services[1], services[3]].map((service, i) => (
              <motion.div
                key={service.id}
                className={`service-item ${i === 1 ? "tall" : ""}`}
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <Service
                  name={service.title}
                  font={fonts[i * 2 + 1]}
                  direction="right"
                  imageUrl={service.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
