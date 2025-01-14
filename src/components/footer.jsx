import SocialLinks from "./socialLinks";

import "../styles/footer.css";

const Footer = () =>
{
    if (location.pathname == '/login'){return null}

    return (
        <div id = "footer">
            <div id = "quick-links">
                <h1>Quick Links</h1>
                <a href = "#intro">Home</a>
                <a href = "/contact">Contact</a>
                <a href = "" target="_blank">Portfolio</a>
            </div>
            <div id = "address">
                <h1>Business Address</h1>
                <p>20 - 22 Wenlock Road</p>
                <p>London</p>
                <p>N17GU</p>
            </div>
            

            <div id = "extra-info">
                <img id = "footer-logo" src = "images/elaine/image00001.png"></img>
                <div  id = "footer-socials">
                    <SocialLinks/>
                </div>
                <p>hello@elainekeep.com</p>
                <p>0781353561</p>
            </div>

        </div>
    )
}

export default Footer;