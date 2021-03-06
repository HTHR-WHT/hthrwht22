import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import homeLg from "../assets/desktop_home_50opac.png";
import homeMd from "../assets/tablet_home_50opac.png";
import homeSm from "../assets/mobile_home_50opac.png";

/* MUI styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      minHeight: "100vh",
      backgroundImage: `url(${homeSm})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: "100vh",
      backgroundImage: `url(${homeMd})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "100vh",
      backgroundImage: `url(${homeLg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    marginTop: "-3.7rem",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    textShadow: "1px 1px 3px violet",
  },
}));

/* COMPONENT */
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <div className={classes.text}>
          <Typography
            className={classes.name}
            mt={"22rem"}
            variant="h1"
            align="center"
            gutterBottom
          >
            Heather White
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            software engineer
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Home;
