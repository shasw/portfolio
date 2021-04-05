import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <Project title="My Project 1" image=""/>
            <Project title="My Project 2" image=""/>
            <Project title="My Project 3" image=""/>
            <Project title="My Project 4" image=""/>
        </div>
    );
}

function Project(props) {
    return(
        <div className="project">
        <h1>{props.title}</h1>
        <img alt="myimage" src={"../public/logo192.png"}></img>
        </div>
    );
}


export default Projects;