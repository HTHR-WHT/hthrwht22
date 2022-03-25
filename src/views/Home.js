import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
