import { motion } from "framer-motion";
import "./statCard.css";

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

export default StatCard;