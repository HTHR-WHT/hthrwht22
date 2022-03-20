import React from "react";
import cmykHW from '../assets/cmyk_HWhite21.png';

const LandingPage = () => {
  return (
    <div>
        <header>
        <img src={cmykHW} id="cmyk" alt="The engineer with a cmyk filter." />
        <h1>Heather White</h1>
        <h3>
          software engineer
        </h3>
      </header>
    </div>
  );
};

export default LandingPage;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={cmykHW} className="cmyk-photo" alt="The engineer with a cmyk filter." />
//         <h1>Heather White</h1>
//         <h3>
//           software engineer
//         </h3>
//       </header>
//     </div>
//   );
// }