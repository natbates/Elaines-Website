import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from "framer-motion";

import "../styles/about.css";

const About = () => {

    const navigate = useNavigate();

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

                {/* <div id="about-top-text">
                    <h1>B2B Content <span class="pink-underline">Marketing</span></h1>            
                </div> */}

                <div className='about-content-container'>

                    <div className="about-container">
                        <div className='about-image-container'>
                            <img src="/images/processed/elaine-about.png" id="about-img" alt="about-img" />
                            <img src="/images/processed/me-text.png" id="this-is-me" alt="this-is-me" />
                        </div>
                    </div>

                    {/* <div id = "about-text">
                        <h1>Attract new leads, re-engage customers or reach a new target market with email marketing, SEO blogs or new site content, whitepapers or guides</h1>
                        <p>Hi, I'm Elaine! I’m a B2B content writer with a passion for turning complex SaaS and tech topics into clear, engaging, and persuasive copy. After years of leading marketing teams for various PLCs and SMEs, <span className = "highlight">I know what works</span> and, more importantly, what doesn’t—so when I write, you can be sure it’s all killer, no filler.</p>
                        <button onClick={() => {navigate("/about")}}>Get to know me</button>
                    </div> */}

                </div>
            </div>

        </div>
    );
}

export default About;
