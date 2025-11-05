import "../styles/intro.css";
import SocialLinks from "../components/socialLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Parallax from "../components/parallax";

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

            <Parallax />

            <div id = "intro-items">
                <div id = "intro-text">
                    <h1>B2B</h1>
                    <h1 className="middle">COPY</h1>
                    <h1 className="last">WRITING</h1>
                </div>

                {/* <div id="intro-video">
                    <video autoPlay muted loop playsInline className="background-video">
                        <source src="images/processed/bubbles.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>   */}

                <div id = "social-intro-holder">
                <p id="social-intro-text">14 + years in marketing in SaaS, HR and tech</p>
                <div className="line"></div>
                <div className="social-intro-links">
                    <SocialLinks />
                </div>
                </div>
            </div>

  

            {/* <div id = "intro-circle">
                    <img id = "mouse" src = "svgs/mouse.svg"></img>
                    <img id = "down" src = "svgs/down.svg"></img>
                    <div className="semi-circle-container" onClick={() => {handleScrollToSection('#about')}}>
                        <svg viewBox="0 0 100 50" width="100%" height="100%" overflow="visible">
                            <path d="M0,50 A50,50 0 0,1 100,50" />
                        </svg>
                        <div className="loader"></div>
                    </div>
            </div> */}
        </div>
    )
}

export default Intro;