import React from "react";
import { motion } from "framer-motion";
import "../styles/services.css";

// Service card component
// Service card component
const Service = ({ name, tag, description, imageUrl, iconUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={name} className="service-background" />

      {/* Icon on top of background */}
      {iconUrl && (
        <img src={iconUrl} alt={`${name} icon`} className="service-icon" />
      )}

      <div className="service-content">
        <h3 className="service-title">{name}</h3>
        <h4 className="service-tag">{tag}</h4>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};


const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Email Marketing",
      tag: "Emails that sell, not shout.",
      description: "I design, code, and build campaigns — from landing pages and newsletters to full drip sequences — all built to drive demos and conversions.",
      image: "images/backgrounds/services.avif",
      icon: "images/services/email.svg", // <-- icon
    },
    {
      id: 2,
      title: "Social Content & Strategy",
      tag: "Strategy meets storytelling.",
      description: "Handwritten posts for founders and brands that want to sound human again. Smart, consistent content with a plan behind it.",
      image: "images/backgrounds/services.avif",
      icon: "images/services/social.svg", // <-- icon
    },
    {
      id: 3,
      title: "SEO & Optimisation",
      tag: "Content that climbs",
      description: "I rework pages for geo and AI search, improve linking, and track performance — turning words into steady organic growth.",
      image: "images/backgrounds/services.avif",
      icon: "images/services/seo.svg", // <-- icon
    },
  ];


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeInText = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section id="services">
      <div id="services-content">
        <div id="services-text">
          <motion.h1
            className="main-text"
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.3 }}
          >
            Services I Offer
          </motion.h1>

          <motion.p
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.3 }}
          >
            You don’t need more content. You need results. That’s why multi-billion-pound brands trust me to plan, write, and deliver marketing that actually performs.
          </motion.p>
        </div>

        <div id="service-row">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="service-item"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i + 2} // starts after text animations
            >
            <Service
              name={service.title.toUpperCase()}
              tag={service.tag}
              description={service.description}
              imageUrl={service.image}
              iconUrl={service.icon}
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
