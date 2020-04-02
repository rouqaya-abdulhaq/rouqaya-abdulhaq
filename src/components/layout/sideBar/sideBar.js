import React from 'react';
import './sideBar.css';
import Modal from '../../HOC/modal/modal';

const sideBar = (props) =>{
    if(props.showSideBar){
        return (
            <div className="sideBar">
               <Modal>
                    <ul className="sideBar"> 
                        <li className="unToggle" onClick={props.toggleSideBarHandler}> X </li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Blog</li>
                    </ul>
                </Modal> 
            </div>
        );
    }else{
        return(
            <div className="toggle">
                <div onClick={props.toggleSideBarHandler} className="sideBar">|||</div>
            </div>
        );
    }
}

export default sideBar;