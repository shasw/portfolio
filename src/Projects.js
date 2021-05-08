import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <Project title="IT Services" projectName="ProjectITServices" />
            <Project title="Acme Web Design" projectName="ProjectAcmeWebDesign" />
            <Project title="Fitness Tracker" projectName="ProjectFitnessTracker" />
            <Project title="Joke Generator" projectName="ProjectJokeGenerator" />
        </div>
    );
}

function Project(props) {
    return (
        <a href={process.env.PUBLIC_URL + "/" + props.projectName + "/index.html"}>
        <div className="project" >
            <img src={process.env.PUBLIC_URL + "/" + props.projectName + "/screenshot.png"} alt="myimage" width="450" height="300"></img>
        </div>
        </a>
    );
}

export default Projects;