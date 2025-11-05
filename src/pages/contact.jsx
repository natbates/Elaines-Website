import "../styles/contact.css";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Variants for the parent container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for each child (fade in + slight upward movement)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 className="main-text" variants={itemVariants}>
        Let's Have A Coffee
      </motion.h1>

      <motion.div id="contact-curve" variants={itemVariants}></motion.div>

      <motion.p className="sub-text" variants={itemVariants}>
        Over to you to message me <span className="pink-underline">Today</span>.
        Either use the contact form below or feel free to drop me a message using my details.
      </motion.p>

      <motion.div id="contact-holder" variants={containerVariants}>
        <motion.form className="contact-form" variants={containerVariants}>
          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="name">Whats your name?</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="email">Whats your email?</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="subject">What do you want to discuss?</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="message">Speak your mind:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </motion.div>

          <motion.div className="button-container right" variants={itemVariants}>
            <button className="clear-button" type="button">Clear</button>
            <button type="submit" className="submit-button">Submit</button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
