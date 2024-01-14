import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

const App = () => {
  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/projects">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};