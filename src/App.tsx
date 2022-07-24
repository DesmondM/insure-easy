import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Accisure from "./pages/Accisure";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";
import Applicationform from "./pages/Applicationform";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Accisure />} />
        <Route path="/application" element={<Applicationform />} />
        {/* <About /> */}
        {/* <Accisure /> */}
      </Routes>
    </Router>
  );
}

export default App;
