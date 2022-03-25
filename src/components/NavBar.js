import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import linkedInLogo from "../assets/icons8-linkedin-50.png";
import githubLogo from "../assets/icons8-github-50.png";

const Navbar = () => {
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  if (path === "/") {
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
          <Link to="/resume" style={{ textDecoration: "none" }}>
            resume
          </Link>
        </div>
        <div className="centerLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </Link>
        </div>
        <div className="rightLinks">
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            portfolio
          </Link>
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
          <Link to="/resume" style={{ textDecoration: "none" }}>
            resume
          </Link>
        </div>
        <div className="centerLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </Link>
        </div>
        <div className="rightLinks">
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "red" }}
          >
            portfolio
          </Link>
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
          <Link to="/resume" style={{ textDecoration: "none" }}>
            resume
          </Link>
        </div>
        <div className="centerLink">
          <Link to="/" style={{ textDecoration: "none" }}>
            HTHR-WHT
          </Link>
        </div>
        <div className="rightLinks">
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            portfolio
          </Link>
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
