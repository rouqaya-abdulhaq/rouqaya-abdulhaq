import React from 'react';
import ProjectCard from '../../components/UI/card/card';
import Button from '../../components/UI/buttons/button/button';
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
        }).then((res)=>{
            if(res.success){
                this.setState({projects : res.projects});
            }
        }).catch((err)=>{
            console.log(err);
        });
    }

    getNextProjects = () =>{
        this.setState(prevState => {return {loadCount: prevState.loadCount += 1}});
        this.fetchProjects();
    }

    getPrevProjects = () =>{
        if(this.state.loadCount > 0){
            this.setState(prevState => {return {loadCount: prevState.loadCount -= 1}});
            this.fetchProjects();
        }
    }

    render(){
        let projectToRender = null
        if(this.state.projects){
            projectToRender = this.state.projects.map((project)=>{
                return <ProjectCard info={project.info} projectLink={project.url}
                GitHubFiles={project.github} title={project.title} imgPath={project.img_url}
                key={project.id}/>
            })
        }

        return(
            <main className="projects">
                <div>
                    {projectToRender}
                    <Button onClick={this.getPrevProjects} value={"<"} 
                    disapled={this.state.loadCount <= 0 ? "true" : null}/> 
                    <Button onClick={this.getNextProjects} value={">"}/>  
                </div>
            </main>
        ); 
    }
}

export default projects;