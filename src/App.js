import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Header />
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

function Home() {
  return (<div className="content">
    <div className="skil">
      <h2>My Skills</h2>
      <p>HTML,HTML5, CSS, CSS3, CSS Flexbox, CSS Grid, JavaScript, React, Git, Facebook Marketing, Email Marketing, SEO, SEM, Inbound Marketing, Google Adwords. </p>
    </div>
    <div className="skil">
      <h2>HTML</h2>
      <div className="progress-bar">100%</div>
    </div>
    <div className="skil">
      <h2>CSS</h2>
      <div className="progress-bar">100%</div>
    </div>
    <div className="skil">
      <h2>JavaScript</h2>
      <div className="progress-bar-l">70%</div>
    </div>
    <div className="skil">
      <h2>React</h2>
      <div className="progress-bar">90%</div>
    </div>
  </div>
  );
}

function Resume() {
  return (
    <div className="content2">
      <h2 className="res-head">Where have I worked?</h2>
      <div className="boxes">
        <div className="box">
          <h3>Freelancer Front End Developer</h3>
          <p>I am a self learned Front End Developer</p>
          <p>Date : April 2020</p>
        </div>
        <div className="box">
          <h3>Digital Marketing Training</h3>
          <p>I have done 6 months of Digital Marketing Training in which I have learned Google-Adwords, Social Media Marketing, How to run campaigns on Facebook, SEO etc</p>
          <p>Date : Jun 2018 - Nov 2018</p>
        </div>
        <div className="box">
          <h3>Reporting Analyst(EXL Services, India)</h3>
          <p>I worked as a Reporting Analyst in Insurance Domain. I worked with following Customers:<br />
                        1. Aetna Inc.
                        My responsibilities included: Health Insurance Document Screening, Medical and Dental
                        Quote Generation and Financial Data Reconciliation.<br />
                        2. Direct Line Group
                        I handled Motor Insurance claims, which involved coordinating with Third Party Insurance
                        Companies to settle Third Party Claims. My responsibilities include examination of claims and
                        establishing their validity and raising payout for Third Party Damages.</p>
          <p>Date : Dec 2013 - Feb 2018</p>
        </div>
        <div className="box">
          <h3>Network Engineer(HCL Infosystems, India)</h3>
          <p>I had to deal with the clients or customers who were facing problems with their Computer, Laptops,
          Tablets and other company devices. I had to assure them that the product they are using is
                        exceptionally good and we are providing the best services. </p>
          <p>Date : Dec 2011 - June 2013</p>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="content3">
      <h2>My Portfolio</h2>
      <h3>What have I built?</h3>
      <div className="projects">

      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content4">
      <h2>Contact Me !!</h2>
      <div className="info">
        <p>My Email Id : hi.swatidev2020@gmail.com</p>
        <p>Location : Harrow, London</p>
        <p>Eligible to work in UK</p>
      </div>
    </div>
  );
}

function Header() {
  return (<div className="header">
    <Tab color="green" icon="fa-home" label="Home" path="/" />
    <Tab color="orange" icon="fa-graduation-cap" label="Resume" path="/resume" />
    <Tab color="blue" icon="fa-folder" label="Work" path="/work" />
    <Tab color="yellow" icon="fa-envelope-square" label="Contact" path="/contact" />
  </div>
  );
}

function Tab(props) {
  return <NavLink className="navitem" to={props.path}>
    <div className={`tab ${props.color}`}>
      <i className={`fas ${props.icon} fa-2x`}></i><br />{props.label}
    </div>
  </NavLink>;
}