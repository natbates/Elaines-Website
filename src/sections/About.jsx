import { useEffect, useState } from 'react'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { db, storage } from '../services/firebaseConfig'; 
import { ref, getDownloadURL, listAll } from 'firebase/storage'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import "../styles/about.css";

const About = () => {

    const navigate = useNavigate();

    return ( 
        <div id="about">

            <div class="about-container">
                <img src="/images/processed/elainee.png" id="about-img" alt="about-img" />
                <img src="/images/processed/me-text.png" id="this-is-me" alt="this-is-me" />
            </div>

            <div id = "about-text">
                <h1>Attract new leads, re-engage customers or reach a new target market with email marketing, SEO blogs or new site content, whitepapers or guides</h1>
                <p>Hi, I'm Elaine! I’m a B2B content writer with a passion for turning complex SaaS and tech topics into clear, engaging, and persuasive copy. After years of leading marketing teams for various PLCs and SMEs, <span className = "highlight">I know what works</span> and, more importantly, what doesn’t—so when I write, you can be sure it’s all killer, no filler.</p>
                <button onClick={() => {navigate("/about")}}>Get to know me</button>
            </div>
        </div>
    );
}

export default About;
