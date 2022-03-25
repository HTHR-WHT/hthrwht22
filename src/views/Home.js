import React from "react";
// import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/NavBar";

/* MUI styles */
// const useStyles = makeStyles({});

/* COMPONENT */
const Home = () => {
  // const homeClass = useStyles();

  return (
    <>
      <Container>
        <Navbar />
        <div>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
          >
            Heather White
          </Typography>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            software engineer
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default Home;
