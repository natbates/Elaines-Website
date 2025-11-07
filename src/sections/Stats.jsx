import { motion } from "framer-motion";
import "../styles/stats.css";

const statsList = [
  "£600K+ pipeline from niche outbound campaigns",
  "£280K+ annual ROI from a £40K budget",
  "2,900% more traffic through blog content than PPC",
  "SEO content ranking #1–5 for competitive SaaS terms",
];

const Stats = () => {
  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // stagger each stat
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="stats"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 className="main-text" variants={textVariant}>
        Stats
      </motion.h1>
      <motion.p className="sub-text" variants={textVariant}>
        Trusted by multi-billion-pound brands, startups, and everything in between. I plan, write,
        and deliver content and campaigns that move the metrics that matter: sales, demos, and
        steady growth.
      </motion.p>

      <motion.div className="stats-container" variants={container}>
        {statsList.map((stat, index) => (
          <motion.div key={index} className="stat-item" variants={item}>
            {stat}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Stats;
