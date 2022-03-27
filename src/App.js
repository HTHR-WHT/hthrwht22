import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";
import Layout from "./components/Layout";

/* MUI THEME */
export const theme = createTheme({
  palette: {
    primary: {
      main: "#dcd5d9",
    },
    secondary: {
      main: "#ee82ee",
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Raleway",
      fontWeight: 500,
      letterSpacing: "1rem",
    },
    h4: {
      fontFamily: "Cabin",
      letterSpacing: "1.5rem",
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
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
