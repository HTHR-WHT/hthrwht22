import logo from './assets/smiley-face.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Heather White</h3>
        <p>
          full stack software engineer
        </p>
      </header>
    </div>
  );
}

export default App;

/*
import React from "react";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
*/