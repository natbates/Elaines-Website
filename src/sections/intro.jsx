import "../styles/intro.css";
import SocialLinks from "../components/socialLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Intro = () => {

    // intro cover neeeds to have a random background image:     
    // background-image: url("../../public//images/elaine/image00078.jpg") - > image93;
    const navigate = useNavigate();

    const handleScrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId); // Use querySelector to get the element by id
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
      };

    return (
        <div id = "intro">
            <div id = "intro-cover" style={{ backgroundImage: `url(images/elaine/backgrounds/image3.jpg)` }}></div>
            <div id = "intro-items">
                <img id = "intro-logo" src = "images/processed/EK white intro.png"></img>
                <div id = "social-intro-holder">
                    <p>14 + years in marketing in SaaS, HR and tech</p>
                    <SocialLinks />
                </div>
            </div>
            <div id = "intro-bottom">
                <div id = "intro-curve"></div>
                <div id = "intro-circle">
                    <img id = "mouse" src = "svgs/mouse.svg"></img>
                    <img id = "down" src = "svgs/down.svg"></img>
                    <div class="semi-circle-container" onClick={() => {handleScrollToSection('#about')}}>
                        <svg viewBox="0 0 100 50" width="100%" height="100%" overflow="visible">
                            <path d="M0,50 A50,50 0 0,1 100,50" />
                        </svg>
                        <div class="loader"></div>
                    </div>
                </div>
                <div id="intro-text">
                    <p>I Create UK's <span class="highlight">Leading</span></p>
                    <h1>B2B Content <span class="pink-underline">Marketing</span></h1>            
                </div>
            </div>
        </div>
    )
}

export default Intro;