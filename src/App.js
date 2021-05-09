import React from "react";
import "./App.css";
import Work from './Work.js';
import Home from './Home.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Header from './Header.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}











