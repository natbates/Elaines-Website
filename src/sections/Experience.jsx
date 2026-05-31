import React from "react";
import { motion } from "framer-motion";
import "../styles/experience.css";
import SectionHeader from "../components/common/SectionHeader/sectionHeader";

const experienceItems = [
  {
    year: "2008",
    title: "Turned professional",
    description: "joined the UK's largest outdoor brand as a content writer.",
  },
  {
    year: "2010s",
    title: "Marketing management",
    description:
      "across PLCs, SaaS, and tech. Ran budgets of £100k+. Led rebrands, events, and campaigns.",
  },
  {
    year: "2016",
    title: "Editor, Incentive & Motivation magazine",
    description: "Built authority in the B2B HR and rewards sector.",
  },
  {
    year: "2018+",
    title: "Full-time freelance",
    description:
      "Built a client list including Salesforce, Atlassian, AI21, Narvar, The Access Group and more.",
  },
  {
    year: "Now",
    title: "Trusted by global brands",
    description:
      "Retained clients, global reach, and a measurable track record. Currently completing Executive Diploma in HR Strategy.",
  },
];

const Experience = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="experience">
      <SectionHeader
        title="My experience"
        subtitle="14+ years building brand trust, driving measurable results, and delivering marketing that actually works."
      />

      <div className="experience-timeline">
        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
            className="experience-item"
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="experience-marker">
              <div className="experience-dot" />
            </div>
            <div className="experience-content">
              <span className="experience-year">{item.year}</span>
              <h3 className="experience-title">{item.title}</h3>
              <p className="experience-description">— {item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
