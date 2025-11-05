import "../styles/navBar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src="/images/processed/EK Logo.png" alt="Logo" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="navbar-links">
        <li onClick={() => navigate("/about")}>About Me</li>
        <li>
          <a href="https://authory.com/ElaineKeep" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* Right: Connect Button */}
      <div className="navbar-action">
        <button onClick={() => {}}>
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
