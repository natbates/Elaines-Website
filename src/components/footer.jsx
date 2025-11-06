import SocialLinks from "./socialLinks";

import "../styles/footer.css";

const Footer = () =>
{
    if (location.pathname == '/login'){return null}

    return (
        <div id = "footer">
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
                            <a href = "https://authory.com/ElaineKeep" target="_blank">Portfolio</a>
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
                        <img id = "footer-logo" src = "images/processed/white logo.png"></img>
                        <p>hello@elainekeep.com</p>
                        <p>07813535671</p>
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