import React from 'react';
import './socialLink.css';

const link = (props) =>{
    return(
        <a href={props.url} rel="noopener noreferrer" target="_blank" title={props.title}>
            <img src={props.img} alt={props.title}/>
        </a>
    );
}

export default link;