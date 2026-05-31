import "../styles/navBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Container variant: smooth stagger, no layout jump
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3, // small global delay
      },
    },
  };

  // Link animation: translateY + opacity only (no layout reflow)
  const linkVariants = {
    hidden: { opacity: 0, y: -6, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="navbar-background">
      <nav className="navbar">
        {/* Left: Logo */}
        <button type="button" className="navbar-logo" onClick={() => navigate("/")} aria-label="Go to home page">
          <img src="images/elaine/white logo.svg" alt="Logo" />
        </button>

        {/* Center: Navigation Links */}
        <motion.ul
          className="navbar-links"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className={location.pathname === '/about' ? "active" : ""} variants={linkVariants}>
            <button type="button" onClick={() => navigate("/about")}>About Me</button>
          </motion.li>

          <motion.li variants={linkVariants}>
            <a
              href="/files/Elaine Portfolio 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marketing Portfolio
            </a>
          </motion.li>

          <motion.li variants={linkVariants}>
            <a
              href="https://authory.com/ElaineKeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Content Samples
            </a>
          </motion.li>


          <motion.li   className={location.pathname === '/contact' ? "active" : ""} variants={linkVariants}>
            <button type="button" onClick={() => navigate("/contact")}>Contact</button>
          </motion.li>
        </motion.ul>

        {/* Right: Connect Button */}
        <motion.div
          className="navbar-action"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        >
          <button
              type="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/elaine-keep/", "_blank")
            }
          >
            Connect
          </button>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
