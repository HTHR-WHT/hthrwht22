import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import homeLg from "../assets/desktop_landing.png";
import homeMd from "../assets/tablet_landing.png";
import homeSm from "../assets/mobile_landing.png";

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
  },
  text: {
    marginTop: "25%",
  },
}));

/* COMPONENT */
const Home = () => {
  const homeClass = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container>
        <div className={homeClass.text}>
          <Typography variant="h1" align="center" gutterBottom>
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
