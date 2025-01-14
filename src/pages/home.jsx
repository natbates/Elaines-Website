import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import About from "../sections/About";
import Services from "../sections/services";
import "../styles/homepage.css";

const Home = () =>
{
    return(
        <>
            <Intro />
            <About />
            <Services />
            <Brands />
            <Samples />
            <Clients />        
        </>
    );
};

export default Home;