import { motion } from "framer-motion";
import "./sectionHeader.css";

const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const headerViewport = {
  once: true,
  amount: 0.4,
  margin: "0px 0px -15% 0px",
};

const SectionHeader = ({ title, subtitle, headingClassName = "main-text", subtitleClassName = "sub-text" }) => {
  return (
    <div className="section-header">
      <motion.h1
        className={headingClassName}
        variants={defaultVariants}
        initial="hidden"
        whileInView="visible"
        viewport={headerViewport}
      >
        {title}
      </motion.h1>

      {subtitle ? (
        <motion.p
          className={subtitleClassName}
          variants={defaultVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={headerViewport}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
