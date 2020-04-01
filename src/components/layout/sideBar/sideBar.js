import React from 'react';
import './sideBar.css';
import Modal from '../../HOC/modal/modal';

const sideBar = (props) =>{
    return (
        <Modal>
            <ul className="sideBar"> 
                <li className="unToggle"> X </li>
                <li>About</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
        </Modal>
    );
}

export default sideBar;