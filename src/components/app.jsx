import Navbar from "../components/navbar";
import "../styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Footer from "./footer";

import LogIn from "../pages/login";
import DashBoard from "../pages/dashboard";

import { NavbarProvider } from "../contexts/navBarContext";
import AuthProvider from "../contexts/authContext";

const App = () => {

    return (
        <AuthProvider>
            <NavbarProvider>
                <div id="page-container">
                    <BrowserRouter>
                        <Navbar />
                        <div id="content-wrap">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route exact path="/login" element={<LogIn />} />
                                <Route exact path = "/dashboard" element={<DashBoard />} />
                            </Routes>
                        </div>
                        <Footer />
                    </BrowserRouter>
                </div>
            </NavbarProvider>
        </AuthProvider>
    );
};

export default App;
