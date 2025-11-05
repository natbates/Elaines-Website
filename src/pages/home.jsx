import Intro from "../sections/intro";
import Brands from "../sections/brands";
import Clients from "../sections/clients";
import Samples from "../sections/samples";
import About from "../sections/About";
import Services from "../sections/services";
import Results from "../sections/Results";
import Parallax from "../components/parallax";
import Portfolio from "../sections/Portfolio";
import "../styles/homepage.css";

const Home = () =>
{
    return(
        <>
            <Intro />

            {/* <div id = "intro-curve">

            </div> */}

            <About />
            <Services />

            <Portfolio />

            <Parallax />
            {/* <Results />  */}
            <Clients />        

            <Brands />
            <Samples />
        </>
    );
};

export default Home;