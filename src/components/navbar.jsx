import "../styles/navBar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SocialLinks from "./socialLinks";

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        if (location.pathname === "/dashboard") {
            navigate('/login');
        }
    };

    const handleDashboard = () => {
        if (currentUser) {
            navigate('/dashboard');
        }
    };

    const handleScrollToSection = (sectionId) => {
        // If we're not on the homepage, navigate to it first
        if (location.pathname !== "/") {
            navigate("/"); // Navigate to the home page
            setIsNavbarVisible(false); // Hide the navbar overlay
            return;
        }

        // If we are on the homepage, scroll to the section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsNavbarVisible(false); // Hide the navbar overlay
        }
    };
    

    useEffect(() => {
        const handleScroll = () => {
            const navBar = document.getElementById("nav-bar");
            if (navBar) {
                if (window.scrollY > 50) {
                    navBar.classList.add("hot-pink");
                } else {
                    navBar.classList.remove("hot-pink");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="nav-bar">
                <div id="logo-icon" className={isNavbarVisible ? "hot-pink" : ""}>
                    <img
                        src="/images/processed/EK Logo.png"
                        alt="logo"
                        onClick={() => navigate('/')} // Navigate to homepage
                    />
                </div>
                <div id="burger" onClick={() => setIsNavbarVisible(true)}>
                    <div className="span-line"></div>
                    <div className="span-line"></div>
                    <div className="span-line"></div>
                </div>
            </div>

            {/* Only render overlay when isNavbarVisible is true */}
            {isNavbarVisible && (
                <div id="nav-overlay" className="active">
                    <button onClick={() => setIsNavbarVisible(false)}>
                        <img src="svgs/exit.svg" alt="Exit" />
                    </button>
                    <div id="nav-items">
                        <a href="/" onClick={() => navigate('/')}>Home</a>
                        <a href="#about" onClick={() => handleScrollToSection("about")}>Who I Am</a>
                        <a href="#services" onClick={() => handleScrollToSection("services")}>My Services</a>
                        <a href="#case-studies" onClick={() => handleScrollToSection("case-studies")}>Case Studies</a>
                        <a href="/contact" onClick={() => setIsNavbarVisible(false)}>Contact</a>
                        <SocialLinks />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
