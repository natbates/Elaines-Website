import React from "react";
import { motion } from "framer-motion";
import "../styles/services.css";

// Service card component
const Service = ({ name, description, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={name} className="service-background" />
      <div className="service-content">
        <h3 className="service-title">{name}</h3>
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
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/flowers/11.jpg",
    },
    {
      id: 2,
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/flowers/21.jpg",
    },
    {
      id: 3,
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/flowers/31.jpg",
    },
    {
      id: 4,
      title: "Service 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "images/flowers/41.jpg",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam.
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
