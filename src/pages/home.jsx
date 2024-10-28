import "../styles/home.css";

import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import Contact from "../sections/contact";
import About from "../sections/About";
import Services from "../sections/services";

import NavbarContext from "../contexts/navBarContext";
import {useEffect, useContext} from "react";

const Home = () =>
{

    const { enableNavbar } = useContext(NavbarContext);

    useEffect(() => {
        enableNavbar();
    }, []);

    return(
        <>
            <Intro />
            <About />
            <Brands />
            <Clients />
            <Samples />
            <Services />
            <Contact />
        </>
    );
};

export default Home;