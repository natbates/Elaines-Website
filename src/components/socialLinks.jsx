import "../styles/socialLinks.css";


const SocialLinks = () =>
{
    return (
        <div id = "social-links">
            <a href = "https://www.linkedin.com/in/elaine-keep/?originalSubdomain=uk" target="_blank">
                <img className = "profile-img" src = "./images/processed/elaineLNprofile.jpg"></img>
                <div className="stack">
                    <p>Connect me on</p>
                    <img src = "./images/processed/linkedinlogo.png"></img>
                </div>
            </a>
        </div>
    )
}

export default SocialLinks;