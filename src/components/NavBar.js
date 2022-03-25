import React from "react";
import Button from "@mui/material/Button";
// import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import HomeIcon from "@mui/icons-material/Home";

/* MUI styles */
const useStyles = makeStyles({
  btn: {
    fontSize: 14,
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "violet",
    },
    marginBottom: 20,
    fontFamily: "Raleway",
  },
  logo: {
    fontSize: 48,
    color: "black",
    "&:hover": {
      color: "violet",
    },
  },
});

/* COMPONENT */
const Navbar = () => {
  // const [path, setPath] = useState("");
  // const location = useLocation();

  // useEffect(() => {
  //   setPath(location.pathname);
  // }, [location]);
  const classes = useStyles();

  return (
    <nav>
      <div>
        <a
          href="https://www.linkedin.com/in/heather-white-nyc/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={classes.logo} />
        </a>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          href="/skills"
          startIcon={<LogoDevIcon />}
        >
          skills
        </Button>
      </div>
      <div>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          href="/"
          startIcon={<HomeIcon />}
        >
          HTHR-WHT
        </Button>
      </div>
      <div>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          href="/portfolio"
          startIcon={<CodeIcon />}
        >
          portfolio
        </Button>
        <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
          <GitHubIcon className={classes.logo} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
