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

    return (
      <nav>
        <div>
          <a
            href="https://www.linkedin.com/in/heather-white-nyc/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedInLogo}
              alt="Link to engineer's LinkedIn page."
            />
          </a>
          <Link to="/skills">
            skills
          </Link>
        </div>
        <div>
          <Link to="/">
            HTHR-WHT
          </Link>
        </div>
        <div>
          <Link to="/portfolio">
            portfolio
          </Link>
          <a
            href="https://github.com/HTHR-WHT"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubLogo}
              alt="Link to engineer's github page."
            />
          </a>
        </div>
      </nav>
    );
};

export default Navbar;
