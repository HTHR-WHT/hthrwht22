import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/NavBar";

const LandingPage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div>
          <Typography variant="h1" color="secondary" align="center" gutterBottom>
            Heather White
          </Typography>
          <Typography variant="h4" color="secondary" align="center" gutterBottom>
            software engineer
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
