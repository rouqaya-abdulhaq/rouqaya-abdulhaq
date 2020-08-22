import React from 'react';
import ProjectLink from '../link/link';
import './card.css';

const card = (props) =>{
    let img = null;
    if(props.imgPath){
        img = <img src={props.imgPath} alt="thumbnail"/>
    }

    return(
        <div className="card" onClick={props.onClick}>
            {img}
            <div className="projInfo">
                <p className="title">{props.title}</p>
                <p>{props.info}</p>
                <ProjectLink to={props.projectLink} value="url"/>
                <ProjectLink to={props.GitHubFiles} value="github source"/>
            </div>
        </div>
    );
}

export default card;