import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div id="leftLinks">
                {/* {redirect to my linkedIn on logo click} */}
                <Link to="/resume">resume</Link>
            </div>
            <div id="centerLink">
                <Link to="/home">HTHR-WHT</Link>
            </div>
            <div id="rightLinks">
                <Link to="/portfolio">portfolio</Link>
                {/* {redirect to my github on logo click} */}
            </div>
        </nav>
    )
};

export default Navbar;
