import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import HomeIcon from "@mui/icons-material/Home";

/* MUI styles */
const useStyles = makeStyles(() => {
  return {
    btn: {
      fontSize: "1rem",
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "violet",
      },
      marginBottom: "1rem",
      fontFamily: "Raleway",
    },
    logo: {
      fontSize: "3rem",
      color: "black",
      "&:hover": {
        color: "violet",
      },
    },
  };
});

/* COMPONENT */
const Navbar = () => {
  const navClasses = useStyles();

  return (
    <nav>
      <div>
        <a
          href="https://www.linkedin.com/in/heather-white-nyc/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={navClasses.logo} />
        </a>
        <Button
          className={navClasses.btn}
          variant="contained"
          href="/skills"
          startIcon={<LogoDevIcon />}
        >
          skills
        </Button>
      </div>
      <div>
        <Button
          className={navClasses.btn}
          variant="contained"
          href="/"
          startIcon={<HomeIcon />}
        >
          HTHR-WHT
        </Button>
      </div>
      <div>
        <Button
          className={navClasses.btn}
          variant="contained"
          href="/portfolio"
          startIcon={<CodeIcon />}
        >
          portfolio
        </Button>
        <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
          <GitHubIcon className={navClasses.logo} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
