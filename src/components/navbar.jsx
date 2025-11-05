import "../styles/navBar.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  // Variants for the container to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each link
      },
    },
  };

  // Variants for each link
  const linkVariants = {
    hidden: { opacity: 0, y: -20 }, // start above and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src="images/processed/white logo.png" alt="Logo" />
      </div>

      {/* Center: Navigation Links */}
      <motion.ul
        className="navbar-links"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={linkVariants} onClick={() => navigate("/about")}>
          About Me
        </motion.li>
        <motion.li variants={linkVariants}>
          <a
            href="https://authory.com/ElaineKeep"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </motion.li>
        <motion.li variants={linkVariants} onClick={() => navigate("/contact")}>
          Contact
        </motion.li>
      </motion.ul>

      {/* Right: Connect Button */}
      <div className="navbar-action">
        <button
          onClick={() => {
            window.open("https://www.linkedin.com/in/your-profile", "_blank");
          }}
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
