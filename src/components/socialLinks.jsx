import "../styles/socialLinks.css";

const SocialLinks = () => {
  return (
    <div id="social-links">
      <a
        href="https://www.linkedin.com/in/elaine-keep/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src="/svgs/linkedin.svg" alt="LinkedIn" className="social-icon" />
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <img src="/svgs/facebook.svg" alt="Facebook" className="social-icon" />
      </a>

      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <img src="/svgs/twitter.svg" alt="Twitter" className="social-icon" />
      </a>
    </div>
  );
};


export default SocialLinks;
