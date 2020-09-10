import React from 'react';
import ProjectCard from '../../components/UI/card/card';
import Button from '../../components/UI/buttons/button/button';
import './projects.css';
import ServerErr from '../../components/layout/errorPage/serverErr';
import Spinner from '../../components/UI/spinner/spinner';

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

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    getProjectsCount = () =>{
        fetch(this.proxyUrl + `https://rouqaya-api.herokuapp.com/getProjectsCount`,{
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

    fetchProjects = () =>{
        this.props.loadingStarted();
        fetch(this.proxyUrl + `https://rouqaya-api.herokuapp.com/loadProjects?loadCount=${this.state.loadCount}`,{
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
            this.props.loadingFinished();
        }).catch((err)=>{
            this.setState({hasErr : true});
            this.props.loadingFinished();
        });
    }

    getNextProjects = () =>{
        if(this.state.loadCount < this.state.projectsCount){
            this.setState(prevState => {return {loadCount: prevState.loadCount += 1}});
            this.fetchProjects();
        }
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
        let projectToRender = this.state.hasErr ? <ServerErr data="projects"/> : <p className="empty">No Projects To Show</p>
        if(this.state.projects.length > 0){
            projectToRender = this.state.projects.map((project)=>{
                return <ProjectCard info={project.info} projectLink={project.url}
                GitHubFiles={project.github} title={project.title} imgPath={project.img_url}
                disableUrl={project.disableUrl}
                key={project.id}/>
            })
        }

        const render = this.props.isLoading ? <Spinner/> : projectToRender  

        return(
            <main className="projects">
                <div>
                    {render}
                    <Button onClick={this.getPrevProjects} value={"<"} 
                    disapled={disaplePrevBtn}/> 
                    <Button onClick={this.getNextProjects} value={">"}
                    disapled={disapleNextBtn}/>  
                </div>
            </main>
        ); 
    }
}

export default projects;