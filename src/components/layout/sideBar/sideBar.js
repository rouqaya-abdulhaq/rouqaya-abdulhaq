import React from 'react';
import './sideBar.css';
import Modal from '../../HOC/modal/modal';
import {Link} from 'react-router-dom';


const sideBar = (props) =>{

        let showSideBar = props.showSideBar ? {left : 0} : {};

        return (
            <div className="slide">
                <div className="toggle">
                    <div onClick={props.toggleSideBarHandler} className="sideBar">|||</div>
                </div>
                <div id="menu" style={showSideBar}>
                    <Modal className="modal">
                        <ul className="sideBar"> 
                            <li className="unToggle" onClick={props.toggleSideBarHandler} key="unToggle"> X </li>
                            <Link to="/about-me">
                                <li onClick={props.toggleSideBarHandler} key="about">About</li>
                            </Link>
                            <Link to="/projects">
                                <li onClick={props.toggleSideBarHandler} key="projects">Projects</li>
                            </Link>
                            <Link to="/blogs">
                                <li onClick={props.toggleSideBarHandler} key="blogs">Blog</li>
                            </Link>
                        </ul>
                    </Modal> 
                </div> 
            </div>
        );
}

export default sideBar;