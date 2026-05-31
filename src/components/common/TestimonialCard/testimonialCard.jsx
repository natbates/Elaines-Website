import { motion } from "framer-motion";
import "./testimonialCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const TestimonialCard = ({ client, index }) => {
  return (
    <motion.div
      key={index}
      className="testimonial-card"
      variants={cardVariants}
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
  );
};

export default TestimonialCard;
