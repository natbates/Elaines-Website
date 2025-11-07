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
    <div
      className="navbar-background"
      style={{
      }}
    >
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <img src="images/processed/white logo.svg" alt="Logo" />
        </div>

        {/* Center: Navigation Links */}
        <motion.ul
          className="navbar-links"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li className={location.pathname === '/about' ? "active" : ""} variants={linkVariants} onClick={() => navigate("/about")}>
            <p>About Me</p>
          </motion.li>

          <motion.li variants={linkVariants}>
            <a
              href="https://www.canva.com/design/DAG2f34whrc/R0vkEJQd1aa_gPN0FXMO_w/edit?utm_content=DAG2f34whrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Marketing Portfolio</p>
            </a>
          </motion.li>

          <motion.li variants={linkVariants}>
            <a
              href="https://authory.com/ElaineKeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Content Samples</p>
            </a>
          </motion.li>


          <motion.li   className={location.pathname === '/contact' ? "active" : ""} variants={linkVariants} onClick={() => navigate("/contact")}>
            <p>Contact</p>
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
            onClick={() =>
              window.open("https://www.linkedin.com/in/your-profile", "_blank")
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
