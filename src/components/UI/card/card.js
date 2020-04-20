import React from 'react';
import pic from'./projectImg.jpg';
import ProjectLink from '../link/link';
import './card.css';

const card = (props) =>{
    return(
        <div className="card" onClick={props.onClick}>
            <img src={pic} alt="PROJECT"/>
            <div className="projInfo">
                <p>{props.title}</p>
                <ProjectLink to={props.projectLink}/>
                <ProjectLink to={props.GitHubFiles}/>
            </div>
        </div>
    );
}

export default card;