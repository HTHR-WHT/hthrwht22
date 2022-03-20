import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";



const Views = () => {
      return (
        <>
            <Routes>
              <Route path="/home"  component={LandingPage} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/resume" component={Resume} />
            </Routes>
        </>
      ); 
  };
  
  export default Views;