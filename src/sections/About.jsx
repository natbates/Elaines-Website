import { motion } from "framer-motion";

import "../styles/about.css";

const About = () => {
    return ( 
        <div id="about">
            
            <div className="about-background-text">
                {["B2B", "CONTENT", "MARKETING"].map((text, i) => (
                    <motion.div
                        key={text}
                        className="line"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>


            <div className='about-content'>

                {/* Top heading intentionally removed for cleaner markup. Re-add if needed. */}

                <div className='about-content-container'>

                    <div className="about-container">
                        <div className='about-image-container'>
                            <img src="/images/processed/elaine-about.png" id="about-img" alt="about-img" />
                            <img src="/images/processed/me-text.png" id="this-is-me" alt="this-is-me" />
                        </div>
                    </div>

                    {/* Extended about text removed to keep component focused; can be reintroduced if required. */}

                </div>
            </div>

        </div>
    );
}

export default About;
