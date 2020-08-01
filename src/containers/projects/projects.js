import React from 'react';
import ProjectCard from '../../components/UI/card/card';
import Button from '../../components/UI/buttons/button/button';
import './projects.css';
import ServerErr from '../../components/layout/errorPage/serverErr';

class projects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects : [],
            loadCount : 0,
            projectsCount : 0,
            hasErr : false,
        }
    }

    componentDidMount(){
        this.fetchProjects();
        this.getProjectsCount();
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
            this.setState({hasErr : true});
        });
    }

    getProjectsCount = () =>{
        fetch(`http://localhost:8000/getProjectsCount`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                this.setState({projectsCount : res.count});
            }
        }).catch((err)=>{
            this.setState({hasErr : true})
        })
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
        const disaplePrevBtn = this.state.loadCount <= 0 ? "true" : null;
        const disapleNextBtn = this.state.loadCount >= this.state.projectsCount ? "true" : null;
        let projectToRender = null
        if(this.state.projects){
            projectToRender = this.state.hasErr ?  <ServerErr data="projects"/>: this.state.projects.map((project)=>{
                return <ProjectCard info={project.info} projectLink={project.url}
                GitHubFiles={project.github} title={project.title} imgPath={project.img_url}
                key={project.id}/>
            })
        }

        return(
            <main className="projects">
                <div>
                    {projectToRender}
                    <Button onClick={disaplePrevBtn ? () =>{} : this.getPrevProjects} value={"<"} 
                    disapled={disaplePrevBtn}/> 
                    <Button onClick={disapleNextBtn ? () =>{} : this.getNextProjects} value={">"}
                    disapled={disapleNextBtn}/>  
                </div>
            </main>
        ); 
    }
}

export default projects;