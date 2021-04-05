import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <Project title="My Project 1" image="" />
            <Project title="My Project 2" image="" />
            <Project title="My Project 3" image="" />
            <Project title="My Project 4" image="" />
        </div>
    );
}

function Project(props) {
    return (
        <div className="project" >
            <img src={process.env.PUBLIC_URL + "/screenshots/portfolio.png"} alt="myimage" width="460" height="200"></img>
            <h1 className="project_title">{props.title}</h1>
        </div>
    );
}


export default Projects;