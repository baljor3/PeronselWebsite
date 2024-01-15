import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './sectionfiles/nav';
import Home from './sectionfiles/Homepage';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;