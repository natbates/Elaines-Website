import "../styles/socialLinks.css";

const SocialLinks = () => {
  return (
    <div id="social-links">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/elaine-keep/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img
          src="images/processed/linkedin.svg"
          alt="LinkedIn"
          className="social-icon"
        />
      </a>

      {/* Authory */}
      <a
        href="https://authory.com/ElaineKeep"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Authory"
      >
        <img
          src="images/processed/authlogo.png"
          alt="Authory"
          className="social-icon"
        />
      </a>

      {/* Canva */}
      <a
        href="/files/Elaine Portfolio 2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Canva"
      >
        <img
          src = "../../images/processed/PDF.svg"
          alt="Canva"
          className="social-icon"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
