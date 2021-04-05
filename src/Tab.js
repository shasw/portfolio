import React from 'react';
import {NavLink} from "react-router-dom";


function Tab(props) {
    return <NavLink className="navitem" to={props.path}>
      <div className={`tab ${props.color}`}>
        <i className={`fas ${props.icon} fa-2x`}></i><br />{props.label}
      </div>
    </NavLink>;
  }

  export default Tab;