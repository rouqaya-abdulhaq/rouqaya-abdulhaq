import React from 'react';
import './sideBar.css';

const sideBar = (props) =>{
    return (
        <ul className="sideBar"> 
            <li className="unToggle"> X </li>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
        </ul>
    );
}

export default sideBar;