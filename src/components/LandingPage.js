import React from "react";
import Navbar from "./NavBar";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <Navbar />
        <header>
          <h1 id="myName" >Heather White</h1>
          <h3 id="sweTitle" >software engineer</h3>
        </header>
      </div>
    </>
  );
};

export default LandingPage;
