// React
import React from "react";
import { Routes, Route } from "react-router-dom";
// Default React styling
import './App.css';
// imported webpages
import Home from './pages/home'
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;