import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/clients.css";

const Clients = () => {
  const clients = [
    {
      company: "Brother Incs",
      quote:
        "She is a great sister, I love her dog and her child is pretty cool!",
      person: "Nathaniel Cooper",
      title: "Director of Brothers Inc",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      company: "Acme Corp",
      quote:
        "Fantastic collaboration experience. They made our brand shine visually.",
      person: "Samantha Doe",
      title: "Marketing Lead at Acme Corp",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      company: "Nova Labs",
      quote:
        "They’re an extension of our team — the quality and speed are unmatched.",
      person: "Elliot Cruz",
      title: "Head of Creative at Nova Labs",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      company: "PixelPeak Studios",
      quote:
        "Their attention to detail was incredible — our app has never looked better.",
      person: "Ava Thompson",
      title: "UI/UX Designer at PixelPeak Studios",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      company: "CloudEdge Technologies",
      quote:
        "Reliable, efficient, and creative. They delivered exactly what we envisioned.",
      person: "Liam Rodriguez",
      title: "CTO at CloudEdge Technologies",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      company: "BrightMind Analytics",
      quote:
        "They transformed our data workflow. The collaboration was smooth and insightful.",
      person: "Emily Carter",
      title: "Head of Product at BrightMind Analytics",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="clients" ref={ref}>
      <motion.div
        className="clients-container"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
            <h1 className="main-text">What they <span className="pink-underline">think</span></h1>
        {clients.map((client, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`testimonial-card ${isEven ? "left" : "right"}`}
            >
              {isEven ? (
                <>
                  <img
                    src={client.avatar}
                    alt={client.person}
                    className="client-avatar"
                  />
                  <div className="testimonial-content">
                    <h2 className="company-name">{client.company}</h2>
                    <p className="quote">“{client.quote}”</p>
                    <p className="client-meta">
                      {client.person}, {client.title}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="testimonial-content">
                    <h2 className="company-name">{client.company}</h2>
                    <p className="quote">“{client.quote}”</p>
                    <p className="client-meta">
                      {client.person}, {client.title}
                    </p>
                  </div>
                  <img
                    src={client.avatar}
                    alt={client.person}
                    className="client-avatar"
                  />
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Clients;
