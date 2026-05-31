import React from "react";
import { motion } from "framer-motion";
import "../styles/results.css";
import SectionHeader from "../components/common/SectionHeader/sectionHeader";

const caseStudies = [
  {
    kicker: "TUFFNELLS — HERITAGE BRAND REBRAND",
    headline: "100+ year old brand. Zero SEO presence. Rebuilt from scratch — and drove 3,000% more traffic.",
    description:
      "Full brand rework including new website, identity, livery, and SEO strategy. Set up email marketing programme — drove highest site traffic in 3 years on first send. Grew LinkedIn from 300 to 1,000+ organically. Trustpilot went from 2.0 to 8.0 for under £1k. Long lengths campaign generated 600 new customer quotes in 3 months.",
    metrics: [
      { value: "3,000%", label: "Traffic increase YoY" },
      { value: "30+", label: "Keywords on pages 1–3" },
      { value: "2.0→8.0", label: "Trustpilot score for <£1k" },
    ],
  },
  {
    kicker: "COLLECTION POT — FINTECH",
    headline: "One blog. 15,000 monthly visitors. Outperforms every other marketing channel.",
    description:
      "Creating optimised copy for Collection Pot since its early days — from lead magnets and site copy to social, email and ongoing blog content. A single blog post now receives ~15,000 visits per month. Blog traffic is 2,963% higher than homepage traffic. This content outperforms PPC and all other marketing strategies for lead generation.",
    metrics: [
      { value: "19,637", label: "Blog visits/month vs 641 homepage" },
      { value: "2,963%", label: "More traffic than homepage" },
      { value: "#1", label: "Lead source vs PPC" },
    ],
  },
  {
    kicker: "ACABOOM — PROPTECH MARKETING",
    headline: "Rebranded and ran the entire marketing function for a growing proptech business — and turned £40k into £280k.",
    description:
      "Took sole ownership of all marketing at Acaboom: brand relaunch, sales approach rework, PR, SEO, social, campaigns, event stands, and email strategy. Built a 12-email prospecting and demo journey from scratch. Grew their customer base from 1,040 to 1,140 in 2024 and increased monthly subscription revenue by 6%.",
    metrics: [
      { value: "£155k+", label: "Conservative direct return annually" },
      { value: "£35,370", label: "From white paper sequence alone" },
      { value: "+100", label: "New paying customers in 2024" },
    ],
  },
  {
    kicker: "GAPS LTD — AEROSPACE & AUTOMOTIVE",
    headline: "7 meetings. £1,250 budget. £637,250 in new business. In under a quarter.",
    description:
      "A niche B2B brand with under 100 global ICPs — mostly abroad. Created a full rebrand, social media presence, and targeted email + direct mail sequence with a personalised gift to drive meeting bookings. Month one: 7 meetings booked. Result: two major client wins totalling over £637k in booked business.",
    metrics: [
      { value: "£600k+", label: "Booked business Q1 2025" },
      { value: "£37,250", label: "Additional sales Q4 2024" },
      { value: "7", label: "Meetings booked month one" },
    ],
  },
];

const Results = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="results-gallery">
      <SectionHeader
        title="What I&apos;ve done"
        subtitle="Over the years I've helped brands — big and small — cut through the noise with sharper words, smarter strategy, and consistent marketing that actually gets done."
      />

      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="case-study-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-inner">
              <span className="card-kicker">{study.kicker}</span>
              <h3 className="card-headline">{study.headline}</h3>
              <p className="card-description">{study.description}</p>
              
              <div className="card-metrics">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="metric">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Results;
