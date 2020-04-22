import React from 'react';
import ProjectCard from '../../components/UI/card/card';
import './projects.css';

class projects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects : [],
            loadCount : 0
        }
    }

    componentDidMount(){
        this.fetchProjects();
    }

    fetchProjects = () =>{
        fetch(`http://localhost:8000/loadProjects?loadCount=${this.state.loadCount}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((projects)=>{
            this.setState({projects : projects});
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
        let projectToRender = null
        if(this.state.projects){
            projectToRender = this.state.projects.map((project)=>{
                return <ProjectCard info={project.info} projectLink={project.url}
                GitHubFiles={project.githubUrl} title={project.title} imgUrl={project.imgUrl}
                key={project.title}/>
            })
        }

        return(
            <main className="projects">
                <div>
                    {projectToRender}
                </div>
            </main>
        ); 
    }
}

export default projects;