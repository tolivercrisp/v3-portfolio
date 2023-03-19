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
// Animated Cursor (https://www.npmjs.com/package/react-animated-cursor)
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <AnimatedCursor
          innerSize={14}
          outerSize={0}
          color='193, 11, 111'/>
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