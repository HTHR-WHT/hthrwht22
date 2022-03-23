import { React, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import linkedInLogo from "../assets/icons8-linkedin-50.png";
import githubLogo from "../assets/icons8-github-50.png";

const Navbar = () => {
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  if (path === "/home" || "/") {
    return (
      <nav>
        <div className="leftLinks">
          <a
            href="https://www.linkedin.com/in/heather-white-nyc/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={linkedInLogo}
              alt="Link to engineer's LinkedIn page."
            />
          </a>
          <NavLink to="/resume" style={{ textDecoration: "none" }}>
            resume
          </NavLink>
        </div>
        <div id="centerLink">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </NavLink>
        </div>
        <div className="rightLinks">
          <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
            portfolio
          </NavLink>
          <a
            href="https://github.com/HTHR-WHT"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={githubLogo}
              alt="Link to engineer's github page."
            />
          </a>
        </div>
      </nav>
    );
  }
  if (path === "/portfolio") {
    return (
      <nav className="navLinks">
        <div id="leftLinks">
          <a
            href="https://www.linkedin.com/in/heather-white-nyc/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={linkedInLogo}
              alt="Link to engineer's LinkedIn page."
            />
          </a>
          <NavLink to="/resume" style={{ textDecoration: "none" }}>
            resume
          </NavLink>
        </div>
        <div id="centerLink">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </NavLink>
        </div>
        <div id="rightLinks">
          <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
            portfolio
          </NavLink>
          <a
            href="https://github.com/HTHR-WHT"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={githubLogo}
              alt="Link to engineer's github page."
            />
          </a>
        </div>
      </nav>
    );
  }
  if (path === "/resume") {
    return (
      <nav className="navLinks">
        <div id="leftLinks">
          <a
            href="https://www.linkedin.com/in/heather-white-nyc/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={linkedInLogo}
              alt="Link to engineer's LinkedIn page."
            />
          </a>
          <NavLink to="/resume" style={{ textDecoration: "none" }}>
            resume
          </NavLink>
        </div>
        <div id="centerLink">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </NavLink>
        </div>
        <div id="rightLinks">
          <NavLink to="/portfolio" style={{ textDecoration: "none" }}>
            portfolio
          </NavLink>
          <a
            href="https://github.com/HTHR-WHT"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoLinks"
              src={githubLogo}
              alt="Link to engineer's github page."
            />
          </a>
        </div>
      </nav>
    );
  }
};

export default Navbar;
