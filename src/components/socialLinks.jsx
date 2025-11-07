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
        href="https://www.canva.com/design/DAG2f34whrc/R0vkEJQd1aa_gPN0FXMO_w/edit?utm_content=DAG2f34whrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Canva"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg"
          alt="Canva"
          className="social-icon"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
