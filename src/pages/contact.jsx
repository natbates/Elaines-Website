import "../styles/contact.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Simulate sending form data
    setTimeout(() => {
      alert("Message sent successfully!");
      handleClear();
      setIsSubmitting(false);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

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
        Let&apos;s Have A Coffee
      </motion.h1>


      <motion.p className="sub-text" variants={itemVariants}>
        Over to you to message me Today.
        Either use the contact form below or feel free to drop me a message using my details.
      </motion.p>

      <motion.div id="contact-holder" variants={containerVariants}>
        <motion.form className="contact-form" onSubmit={handleSubmit} variants={containerVariants}>
          {["name", "email", "subject", "message"].map((field, index) => (
            <motion.div className="form-group" variants={itemVariants} key={index}>
              <label htmlFor={field}>
                {field === "name"
                  ? "What's your name?"
                  : field === "email"
                  ? "What's your email?"
                  : field === "subject"
                  ? "What do you want to discuss?"
                  : "Speak your mind:"}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows="5"
                  placeholder="Your Message"
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.div className="button-container right" variants={itemVariants}>
            <button
              className="clear-button"
              type="button"
              onClick={handleClear}
              disabled={Object.values(formData).every((f) => f === "")}
            >
              Clear
            </button>
            <button
              type="submit"
              className="submit-button"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
