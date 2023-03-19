// React
import React from "react";
import { Routes, Route } from "react-router-dom";
// Default React styling
import './App.css';
// imported webpages
import Home from './pages/home'
import About from './components/about'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
};

export default App;