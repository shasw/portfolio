import React from 'react'
import Tab from './Tab.js';


function Header() {
  return (<div className="header">
    <Tab color="green" icon="fa-home" label="Home" path="/" />
    <Tab color="orange" icon="fa-graduation-cap" label="Resume" path="/resume" />
    <Tab color="blue" icon="fa-folder" label="Work" path="/work" />
    <Tab color="yellow" icon="fa-envelope-square" label="Contact" path="/contact" />
  </div>
  );
}

export default Header;