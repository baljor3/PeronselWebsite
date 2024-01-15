import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './sectionfiles/nav';
import Home from './sectionfiles/Homepage';

const App = () => {
  return (
    
    <Router>
      <Nav/>
      <Home></Home>
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;