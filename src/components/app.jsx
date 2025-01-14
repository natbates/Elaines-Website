import Navbar from "../components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Footer from "./footer";
import AboutMe from "../pages/about-me";

// Public
import Contact from "../pages/contact";

// Private
import LogIn from "../pages/login";
import DashBoard from "../pages/dashboard";

import AuthProvider from "../contexts/authContext";

const App = () => {

    return (
        <AuthProvider>
            <div id="page-container">
                <BrowserRouter>
                    <Navbar />
                    <div id="content-wrap">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/login" element={<LogIn />} />
                            <Route exact path="/about" element={<AboutMe />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path = "/dashboard" element={<DashBoard />} />
                        </Routes>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
};

export default App;
