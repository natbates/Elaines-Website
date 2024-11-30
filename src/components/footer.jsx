import SocialLinks from "./socialLinks";

import "../styles/footer.css";

const Footer = () =>
{
    if (location.pathname == '/login'){return null}

    return (
        <div id = "footer">
            <div id = "quick-links">
                <h1>Quick Links</h1>
                <a>Blog</a>
                <a>Podcasts</a>
                <a>Careers</a>
                <a>Portfolio</a>
                <a>Downloads</a>
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
                <p>012340 124098</p>
            </div>

        </div>
    )
}

export default Footer;