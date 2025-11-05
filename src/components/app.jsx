import Navbar from "../components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Footer from "./footer";
import AboutMe from "../pages/about-me";

// Public
import Contact from "../pages/contact";

import { useNavigate } from "react-router-dom";
import "../styles/app.css";

const App = () => {

    const navigate = useNavigate();

    return (
        <div id="page-container">
            <button onClick = {() => {navigate("contact")}} className="global-button">Get In Touch</button>
            <Navbar />
            <div id="content-wrap">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<AboutMe />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
