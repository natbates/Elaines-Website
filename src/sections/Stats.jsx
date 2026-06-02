import "../styles/stats.css";
import { motion } from "framer-motion";

const statsList = [
  {
    kicker: "Acaboom — PropTech",
    value: "£280k",
    copy:
      "Average annual return on a £40k marketing budget. £7 for every £1 spent. Full marketing management, campaigns, branding and email strategy — sole responsibility.",
  },
  {
    kicker: "Gaps LTD — Aerospace & Automotive",
    value: "£637k",
    copy:
      "In booked business from a targeted email + direct mail campaign costing just £1,250. 7 meetings booked in one month on one of the strongest clients converted.",
    featured: true,
  },
  {
    kicker: "Tuffnells — 100Yr+ Heritage Brand",
    value: "3,000%",
    copy:
      "Increase in website traffic year-on-year after full rebrand, new site, and SEO overhaul. 0 keywords on pages 1-3 grew to 30+. Trustpilot from 2.0 to 8.0 for under £1k.",
  },
  {
    kicker: "Collection Pot — Fintech",
    value: "2,963%",
    copy:
      "More traffic than their homepage. A single blog post gets 15,000 visits per month — outperforming PPC and all other marketing channels. Blog traffic: 19,633 vs homepage: 641.",
  },
  {
    kicker: "The Access Group — PeopleHR",
    value: "1,500+",
    copy:
      "Monthly visits to my top-performing content pieces. ‘What Is Toll’ alone gets 1,405 visits/month. Homepage gets 8,542 — for context. Two landing pages also drive hundreds of monthly visits each.",
  },
  {
    kicker: "Acaboom — Email Campaigns",
    value: "£86,801",
    copy:
      "In sales from 40+ email campaigns to media houses and the company’s own database. £35,370 from a single white paper outreach sequence. £24,258 from solo campaigns alone.",
  },
  {
    kicker: "Kolekti — Part of Atlassian",
    value: "9,000",
    copy:
      "Monthly visitors driven largely by my blog content. ‘What is collaborative teamwork?’ ranks 6th. ‘What is documentation?’ ranks 8th. Position 5 on Google for core head terms.",
  },
  {
    kicker: "Narvar — B2B Ecommerce",
    value: "Top 5",
    copy:
      "Two of my blogs are in Narvar’s top 5 traffic sources globally. Produced a UK State of Returns report and a 200-retailer return trends analysis used by the sales team for lead generation.",
  },
  {
    kicker: "Tuffnells — Email & Print",
    value: "£68,532",
    copy:
      "In quoted business from a single print + email campaign. A second campaign generated £33,599. First email send drove the highest site traffic in 3 years. All within a £100k+ annual budget.",
  },
];

const StatCard = ({ stat, index }) => {
  return (
    <motion.article
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.08 + index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="stat-card__kicker">{stat.kicker}</p>
      <h2 className="stat-card__value">{stat.value}</h2>
      <p className="stat-card__copy">{stat.copy}</p>
    </motion.article>
  );
};

const Stats = () => {
  return (
    <section id="stats" aria-label="Marketing stats and results">
      <h1 className="main-text">What I Can Do</h1>
      <p className="sub-text">
        A snapshot of the outcomes behind the campaigns, content, and strategy.
      </p>
      <div className="stats-grid">
        {statsList.map((stat, index) => (
          <StatCard key={`${stat.kicker}-${index}`} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Stats;