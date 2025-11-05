import "../styles/clients.css";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const clients = [
    {
      company: "Brother Incs",
      quote:
        "She is a great sister, I love her dog and her child is pretty cool!",
      person: "Nathaniel",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      company: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      person: "Client Name",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      company: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      person: "Client Name",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      company: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      person: "Client Name",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      company: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      person: "Client Name",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      company: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      person: "Client Name",
      title: "Clients Position",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="clients" ref={ref}>
      {/* Animate heading */}
      <motion.h1
        className="main-text"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        What they <span className="pink-underline">think</span>
      </motion.h1>

      {/* Animate subtext */}
      <motion.p
        className="sub-text"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
      </motion.p>

      {/* Animate testimonial grid */}
      <motion.div
        className="clients-grid"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={cardVariants}
          >
            <div className="testimonial-top">
              <img
                src={client.avatar}
                alt={client.person}
                className="client-avatar"
              />
              <h2 className="company-name">{client.company}</h2>
            </div>
            <p className="quote">“{client.quote}”</p>
            <p className="client-meta">
              {client.person}, {client.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
