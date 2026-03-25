import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// NB1: from v6 switch is change to Routes
// NB2: Use element instead of children


// page
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";

// navbar
import Navbar from "./Navbar";

// New
const ReactRouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  );
};




// Old

// const ReactRouterSetup = () => {
//   return (
//     <Router>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/about">
//         <About />
//       </Route>
//       <Route path="/people">
//         <People />
//       </Route>
//     </Router>
//   );
// };

// exact fix matching path
export default ReactRouterSetup;
