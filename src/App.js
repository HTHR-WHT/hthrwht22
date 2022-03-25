import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";

/* MUI THEME */
const theme = createTheme({
  palette: {
    primary: {
      main: "#ee82ee",
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Raleway",
      letterSpacing: 5,
    },
    h4: {
      fontFamily: "Cabin",
      letterSpacing: 20,
    },
    body1: {
      fontFamily: "Cabin",
    },
    body2: {
      fontFamily: "Cabin",
    },
  },
});

/* COMPONENT */
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
