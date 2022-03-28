import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import HomeIcon from "@mui/icons-material/Home";

/* MUI styles */
const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F530",
  },
  pages: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexBasis: "auto",
    marginLeft: "1.75rem",
  },
  logoContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: "1.5rem",
    marginRight: "2rem",
  },
  logo: {
    color: "black",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
/* custom nav button styles */
const ColorButton = styled(Button)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

/* COMPONENT */
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.pages}>
        <div>
          <ColorButton
            variant="text"
            href="/"
            startIcon={<HomeIcon aria-label="home link" />}
          >
            HTHR-WHT
          </ColorButton>
        </div>
        <div>
          <ColorButton
            variant="text"
            href="/skills"
            startIcon={<LogoDevIcon aria-label="tech skills link" />}
          >
            skills
          </ColorButton>
        </div>

        <div>
          <ColorButton
            variant="text"
            href="/portfolio"
            startIcon={<CodeIcon aria-label="portfolio link" />}
          >
            portfolio
          </ColorButton>
        </div>
      </div>
      <div className={classes.logoContainer}>
        <a
          href="https://www.linkedin.com/in/heather-white-nyc/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className={classes.logo}
            fontSize="large"
            aria-label="linked in link"
          />
        </a>
        <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
          <GitHubIcon
            className={classes.logo}
            fontSize="large"
            aria-label="github repo link"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
