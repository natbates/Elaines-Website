import SocialLinks from "./socialLinks";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import FooterArrow from "../assets/Cool Arrows/Layer 7.png";

import "../styles/footer.css";

const Footer = () =>
{
    const location = useLocation();

    if (location.pathname === '/login'){return null}

    return (
        <div id = "footer" className={location.pathname !== "/" ? "not-home" : ""}>
            <motion.img
                className="page-decor-arrow page-decor-arrow--footer"
                src={FooterArrow}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            />
            <div className="footer-content"> 

                <h1 className="footer-title">
                    REACH OUT
                </h1>  
            
                <div className="row">

                    <div className="links-address">
                        <div id = "quick-links">
                            <h1>Quick Links</h1>
                            <a href = "#intro">Home</a>
                            <a href = "/about">About me</a>
                            <a href = "https://authory.com/ElaineKeep" target="_blank" rel="noreferrer">Portfolio</a>
                            <a href = "/contact">Contact</a>
                        </div>
                        <div id = "address">
                            <h1>Business Address</h1>
                            <p>20 - 22 Wenlock Road</p>
                            <p>London</p>
                            <p>N17GU</p>
                        </div>
                    </div>

                    <div id = "extra-info">
                        <img id = "footer-logo" src = "images/elaine/white logo.svg" alt="Elaine Keep logo" />
                        <p>hello@elainekeep.com</p>
                        <SocialLinks />
                    </div>
                </div>

                <div className="footer-rose"></div>

                <div className="copy-right">
                © {new Date().getFullYear()} Elaine Keep. All rights reserved.
                </div>

            </div>

        </div>
    )
}

export default Footer;