import "../styles/about.css";
import React, { useState } from "react";

const AboutMe = () => {

    return (
        <div id="about-me-page">
            <div id = "about-top-img" style={{ backgroundImage: `url(images/elaine/backgrounds/image3.jpg)` }}>
                <h1 className="main-text">A bit more about me...</h1>
            </div>
            <div id="contact-curve"></div>
            <div id = "about-info">
                <p>From crafting impactful email sequences to long-form blog posts, landing pages, and web copy, I specialize in helping businesses like yours connect with their audience in meaningful ways. I’ve worked with clients across industries—from innovative fintech startups to global e-commerce giants—driving traffic, boosting conversions, and delivering results that matter.</p>
                <p>When I’m not writing, you’ll find me running (I’m currently training for my next 10K), enjoying my quirky collection of handbags, or spending time with my family. I live in a busy household with my engineer husband, a golden retriever, and a seven-year-old son who keeps me on my toes.</p>
                <p>I'm also a huge fan of podcasts and love a good cup of tea with biscuits (preferably more biscuits than tea). Oh, and my weekend car? A 1991 Nissan Figaro named Betty—she’s a total joy to drive!</p>
                <img src = "/images/processed/car.png"></img>
                <p>Currently, I’m working toward an Executive Diploma in HR Strategy with the MTF Institute, always seeking to learn and grow both professionally and personally.</p>
            </div>
        </div>
    );
}

export default AboutMe;