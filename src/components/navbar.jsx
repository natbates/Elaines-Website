
import {Link} from "react-router-dom";
import "../styles/navBar.css";
import "../styles/app.css";

const Navbar = () =>
{
    return(

        <div id = "nav-bar">
            <Link className = "nav-bar-item" to="/">Home</Link>
            <Link className = "nav-bar-item" to="/blog">Samples</Link>
            <Link className = "nav-bar-item" to="/">Portfolio</Link>
            <Link className = "nav-bar-item" to="/">Contact</Link>

        </div>
    );
}

export default Navbar;