import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
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
          <Button variant="outlined" color="secondary" href="/skills">
            skills
          </Button>
        </div>
        <div>
          <Button variant="outlined" color="secondary" href="/">
            HTHR-WHT
          </Button>
        </div>
        <div>
          <Button variant="outlined" color="secondary" href="/portfolio">
            portfolio
          </Button>
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
