import "../styles/navBar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SocialLinks from "./socialLinks";

const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const { currentUser, logout } = useContext(AuthContext);
    const [atTop, setAtTop] = useState(false);
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
        setIsNavbarVisible(false)
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
            const navBar = document.getElementById("nav-bar-background");
            if (navBar) {
                if (window.scrollY > 50) {
                    setAtTop(true);
                } else {
                    setAtTop(false);
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
                    {atTop ?
                    <img
                        src="/images/processed/EK Logo.png"
                        alt="logo"
                        onClick={() => navigate('/')} // Navigate to homepage
                    />
                    :
                    <img
                        src="/images/processed/logo-white.png"
                        alt="logo"
                        onClick={() => navigate('/')} // Navigate to homepage
                    />
                    }
                </div>
            </div>
            <div className={`${atTop ? "hot-pink" : ""}`} id = "nav-bar-background"></div>

            <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
                <label for="page-nav-toggle">
                <svg class="icon--menu-toggle" viewBox="0 0 60 30">
                    <g class="icon-group">
                    <g style={{ stroke: !atTop ? "var(--white)" : "var(--hot-pink)" }}>
                    <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                    </g>
                    <g class="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                    </g>
                    </g>
                </svg>
                </label>
                <nav class="main-navigation">
                    <ul>
                        <li><a href="/" onClick={() => navigate('/')}>Home</a></li>
                        <li><a href="/about" onClick={() => setIsNavbarVisible(false)}>About Me</a></li>
                        <li><a href= "https://authory.com/ElaineKeep" target = "_blank" onClick={() => setIsNavbarVisible()}>Porfolio</a></li>
                        <li><a href="#case-studies" onClick={() => handleScrollToSection("case-studies")}>Case Studies</a></li>
                        <li><a href="/contact" onClick={() => setIsNavbarVisible(false)}>Contact</a></li>
                    </ul>
                </nav>

        </>
    );
};

export default Navbar;
