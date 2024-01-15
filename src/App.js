import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './sectionfiles/nav';
import Home from './sectionfiles/Homepage';

const App = () => {
  return (
    
    <Router>
      <Nav/>
      <Home></Home>
    </Router>
  );
};

export default App;