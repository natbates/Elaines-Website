import "../styles/clients.css";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../components/common/SectionHeader/sectionHeader";
import TestimonialCard from "../components/common/TestimonialCard/testimonialCard";

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

  return (
    <section id="clients" ref={ref}>
      <SectionHeader
        title="What they Think"
        subtitle="I’m pleased to have great reviews for my results, but I’m more pleased when the reviews speak highly of my character and attitude."
      />

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
          <TestimonialCard key={index} client={client} />
        ))}
      </motion.div>

    </section>
  );
};

export default Clients;
