import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;

// import logo from './assets/smiley-face.png';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h3>Heather White</h3>
//         <p>
//           full stack software engineer
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
