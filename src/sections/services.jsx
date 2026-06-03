import React from "react";
import { motion } from "framer-motion";
import "../styles/services.css";
import { useNavigate } from "react-router-dom";
import ServicesArrow from "../assets/Cool Arrows/Layer 3.png";

// Service card component
const Service = ({ name, tag, description }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card" onClick={() => {navigate('/contact')}}>

      <div className="service-content">
        <div className="service-topline">
          <h3 className="service-title">{name}</h3>
          <h4 className="service-tag">{tag}</h4>
        </div>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};


const Services = () => {
  const sectionViewport = {
    once: true,
    amount: 0.35,
    margin: "0px 0px -15% 0px",
  };

  // Services data
  const services = [
    {
      id: 1,
      title: "Email Marketing",
      tag: "Emails that sell, not shout.",
      description: "I design, code, and build campaigns — from landing pages and newsletters to full drip sequences — all built to drive demos and conversions.",
      image: "images/backgrounds/services.avif",
    },
    {
      id: 2,
      title: "Social Content & Strategy",
      tag: "Strategy meets storytelling.",
      description: "Handwritten posts for founders and brands that want to sound human again. Smart, consistent content with a plan behind it.",
      image: "images/backgrounds/services.avif",
    },
    {
      id: 3,
      title: "SEO & Optimisation",
      tag: "Content that climbs",
      description: "I rework pages for geo and AI search, improve linking, and track performance — turning words into steady organic growth.",
      image: "images/backgrounds/services.avif",
    },
    {
      id: 4,
      title: "Marketing Management",
      tag: "Strategy & delivery",
      description: "Including event marketing, agency management, research & interviews and sales team assets.",
      image: "images/backgrounds/services.avif",
    },
  ];


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeInText = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.75, ease: "easeOut" },
    }),
  };

  return (
    <section id="services">
      <motion.img
        className="home-decor-arrow home-decor-arrow--services"
        src={ServicesArrow}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={sectionViewport}
      />
      <div id="services-content">
        <div id="services-text">
          <motion.h1
            className="main-text"
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={sectionViewport}
          >
            Areas of expertise
          </motion.h1>

          <motion.p
            variants={fadeInText}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={sectionViewport}
          >
            You don’t need more content. You need results. That’s why million pound brands trust me to plan, write, and deliver marketing that actually performs.
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
              viewport={sectionViewport}
              custom={i}
            >
            <Service
              name={service.title.toUpperCase()}
              tag={service.tag}
              description={service.description}
              imageUrl={service.image}
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
