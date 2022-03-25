import React from "react";
import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from "../components/NavBar";

/* MUI styles */
const useStyles = makeStyles({
  name: {
    fontFamily: "Raleway",
    fontWeight: 500,
    letterSpacing: 5,
    color: "black"
  },
  title: {
    fontFamily: "Cabin",
    letterSpacing: 15,
    color: "black"
  }
});

/* COMPONENT */
const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Navbar />
        <div>
          <Typography className={classes.name} variant="h1" color="secondary" align="center" gutterBottom>
            Heather White
          </Typography>
          <Typography className={classes.title} variant="h4" color="secondary" align="center" gutterBottom>
            software engineer
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
