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
    justifyContent: "space-between",
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
  color: theme.palette.getContrastText("#000"),
  backgroundColor: "#000",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

/* COMPONENT */
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div>
        <a
          href="https://www.linkedin.com/in/heather-white-nyc/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={classes.logo} />
        </a>
        <ColorButton
          variant="contained"
          href="/skills"
          startIcon={<LogoDevIcon />}
        >
          skills
        </ColorButton>
      </div>
      <div>
        <ColorButton variant="contained" href="/" startIcon={<HomeIcon />}>
          HTHR-WHT
        </ColorButton>
      </div>
      <div>
        <ColorButton
          variant="contained"
          href="/portfolio"
          startIcon={<CodeIcon />}
        >
          portfolio
        </ColorButton>
        <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
          <GitHubIcon className={classes.logo} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
