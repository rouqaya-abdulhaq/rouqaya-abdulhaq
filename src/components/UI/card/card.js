import React from 'react';
// import pic from'./projectImg.jpg';
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
                <p>{props.title}</p>
                <p>{props.info}</p>
                <ProjectLink to={props.projectLink}/>
                <ProjectLink to={props.GitHubFiles}/>
            </div>
        </div>
    );
}

export default card;