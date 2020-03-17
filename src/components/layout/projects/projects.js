import React from 'react';
import ProjectCard from '../../UI/card/card';
import './projects.css';

const projects = (props) => {
    return(
        <main className="projects">
            <div>
                <ProjectCard info="project info" 
                projectLink="project Link" 
                GitHubFiles="GitHub Files"/>

                <ProjectCard info="project2 info" 
                projectLink="project2 Link" 
                GitHubFiles="GitHub Files"/>
            </div>
        </main>
    );
}

export default projects;