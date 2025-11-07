import "../styles/clients.css";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const clients = [
    {
      company: "People HR",
      quote:
        "Elaine is a brilliant content writer to work with. She has supported SMB at the Access group and contributed towards increasing organic traffic. Elaine is an absolute pleasure to work with and I look forward to more projects together in the future.",
      person: "Sophie Parry",
      title: "Head of Marketing",
      avatar: "images/clients/sophie.png",
    },
    {
      company: "Kolekti",
      quote:
        "I discovered Elaine on a search for a specialist content writer to support us during the launch of our website. We needed content that was delivered at speed, with a focus on quality, readability and SEO optimisation. And she has delivered! ",
      person: "Simon Kirrane",
      title: "Senior Content Marketing Manager",
      avatar: "images/clients/simon.png",
    },
    {
      company: "Motivates",
      quote:
        "Elaine's a B2B marketing & copywriting whiz I wholeheartedly recommend! Her SEO-driven website & brochure copywriting captivated us and our audience. She is quick, clear, compelling in her delivery. Plus, she writes a wonderful blog! A reliable pro!",
      person: "Michelle L P Boland",
      title: "Marketing Director",
      avatar: "images/clients/michelle.png",
    },
    {
      company: "Orderly",
      quote:
        "I’ve had the pleasure of working with Elaine, and she consistently delivers amazing copy on time, perfect from the first draft. Her ability to understand our audience’s needs is almost like she has a crystal ball. She presents our brand’s message in a beautifully fitting and easily digestible manner, which has significantly enhanced our communication efforts.",
      person: "Peter Evans",
      title: "CEO",
      avatar: "images/clients/peter.png",
    },
    {
      company: "Acaboom",
      quote:
        "I’ve had the pleasure of working closely with Elaine in her capacity as sole marketing lead, and I can confidently say she is one of the most talented and positive professionals I’ve encountered. Elaine’s content writing is exceptional; it’s consistently clear, compelling, and aligned with brand tone and strategy.",
      person: "Abi Teale",
      title: "Supply Chain and Operations Specialist",
      avatar: "images/clients/abi.png",
    },
    {
      company: "Women In Incentives Network",
      quote:
        "We are super happy with Elaine for our content at the Women in Incentives Network (WiiN)! She writes highly personal and easy to read pieces, like interviews and industry articles. Also the communication and project updates are amazing. It's a joy to work with Elaine!",
      person: "Rachelle Leerling",
      title: "Content Manager",
      avatar: "images/clients/rachel.png",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6,  ease: [0.22, 1, 0.36, 1] } },
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
        What they Think
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
            transition: {
              delayChildren: 0.2, 
              staggerChildren: 0.25, 
              when: "beforeChildren", 
              staggerDirection: 1,
            },
          },
        }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2,
                  ease: "easeOut", // ✅ simpler, Safari-safe easing
                },
              },
            }}
          >
            <div className="testimonial-top">
              <img src={client.avatar} alt={client.person} className="client-avatar" />
              <h2 className="company-name">{client.person}</h2>
            </div>
            <p className="quote">“{client.quote}”</p>
            <p className="client-meta">
              {client.company}, {client.title}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Clients;
