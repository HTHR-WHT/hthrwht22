import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/NavBar";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Typography variant="h1" color="primary" align="center" gutterBottom>
            Heather White
          </Typography>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            software engineer
          </Typography>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
