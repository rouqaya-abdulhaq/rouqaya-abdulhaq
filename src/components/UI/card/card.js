import React from 'react';
import ProjectLink from '../link/link';
import './card.css';

const card = (props) =>{
    
    let img = null;
    if(props.imgPath){
        img = <img src={props.imgPath} alt="thumbnail"/>
    }

    let clickable = "";
    let url = props.disableUrl? <p>Not Deployed yet</p> : <ProjectLink to={props.projectLink} value="url"/>;
    let github = <ProjectLink to={props.GitHubFiles} value="github source"/>

    if(props.blog)
    {
        clickable = "clickable";
        url = null;
        github = null;
    }

    return(
        <div className={`card ${clickable}`}  onClick={props.onClick}>
            {img}
            <div className="projInfo">
                <p className="title">{props.title}</p>
                <p>{props.info}</p>
                {url}
                {github}
            </div>
        </div>
    );
}

export default card;