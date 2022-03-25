import React from "react";
import Button from '@mui/material/Button';
// import { useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
const Navbar = () => {
  // const [path, setPath] = useState("");
  // const location = useLocation();

  // useEffect(() => {
  //   setPath(location.pathname);
  // }, [location]);

  return (
    <nav>
      <div>
        <a
          href="https://www.linkedin.com/in/heather-white-nyc/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
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
        <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
