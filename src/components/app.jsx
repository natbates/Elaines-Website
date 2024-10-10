import Navbar from "../components/navbar";
import "../styles/app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import InfoBar from "./infoBar";

const App = () =>
{
    return (
        <BrowserRouter>
            <Navbar/>
            <div id = "info-page-container">
                <div id = "page-content">
                    <Routes>
                        <Route exact path="/" element = {<Home/>}>Home</Route>
                    </Routes>
                </div>
                <InfoBar/>
            </div>
        </BrowserRouter>
    );
};

export default App;