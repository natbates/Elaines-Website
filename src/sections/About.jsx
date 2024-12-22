import { useEffect, useState } from 'react'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { db, storage } from '../services/firebaseConfig'; 
import { ref, getDownloadURL, listAll } from 'firebase/storage'; 

import "../styles/about.css";

const About = () => {

    return ( 
        <div id="about">
            <div className = "texture-2"></div>
            <div className = "texture-3"></div>
            <div class="image-container">
                <div id = "about-img" alt = "about-img"><div class = "image-cover"></div></div>
            </div>
            <div id = "about-text">
                <h1>Attract new leads, re-engage customers or reach a new <span className = "yellow-underline">target</span> market with email marketing, SEO blogs or new site content, whitepapers or guides</h1>
                <p>After leaving university, where I studied journalism and media, I started writing funny pieces for local magazines. I became a professional content writer in 2008 working for the UK's largest outdoor brand. I then moved into marketing management with a range of PLCs and tech companies. In 2016 I became the editor of Incentive & Motivation magazine, and after the birth of my one and only child, I became a full-time freelance B2B content writer.</p>
                <button>Find out more</button>
                <div className = "texture-1"></div>
            </div>
        </div>
    );
}

export default About;
