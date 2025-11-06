import Navbar from "../components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Footer from "./footer";
import AboutMe from "../pages/about-me";

// Public
import Contact from "../pages/contact";

import { useNavigate } from "react-router-dom";
import "../styles/app.css";
import { motion } from "framer-motion";

const PageNotFound = () => {
  const navigate = useNavigate();

  // animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        404 Not Found
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Uh oh! This page doesn’t exist!
      </motion.p>

      <motion.button
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </motion.button>
    </motion.div>
  );
};


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
                    <Route exact path ="/*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
