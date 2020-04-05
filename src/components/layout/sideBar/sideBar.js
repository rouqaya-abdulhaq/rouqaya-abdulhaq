import React from 'react';
import './sideBar.css';
import Modal from '../../HOC/modal/modal';



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
                            <li className="unToggle" onClick={props.toggleSideBarHandler}> X </li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Blog</li>
                        </ul>
                    </Modal> 
                </div> 
            </div>
        );
}

export default sideBar;