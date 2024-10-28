import "../styles/navBar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Import useEffect and useState
import NavbarContext from '../contexts/navBarContext';
import { AuthContext } from "../contexts/authContext";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"; // Import necessary Firebase Storage functions
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { isNavbarVisible } = useContext(NavbarContext);
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = () => {
        logout();
        if (location.pathname === "/dashboard") { // Check if on dashboard
            navigate('/login'); // Redirect to login if on dashboard
        }
    };

    const handleDashboard = () => {
        if (currentUser) {
            navigate('/dashboard');
        }
    };

    return (
        <div id="nav-bar">
            <div className="nav-left">
                <Link to="/">
                    <div class="svg-logo"></div>
                </Link>
            </div>

            {isNavbarVisible ? (
                <div className="nav-center">
                    <a href="#about">About</a>
                    <a href="#brands">Brands</a>
                    <a href="#clients">Clients</a>
                    <a href="#samples">Samples</a>
                </div>
            ) : null}

            <div className="nav-right">
                {currentUser == null ? (
                    null
                ) : (
                    <>

                        <button className="nav-button" onClick={handleLogout}>Log Out</button>
                        <button className="nav-button" onClick={handleDashboard}>Dashboard</button>
                    </>
                )}
                {isNavbarVisible ? (
                    <a href="#contact">
                        <button className="nav-button">Contact</button>
                    </a>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
