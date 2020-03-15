import React from 'react';
import { Link } from 'react-router-dom';

import NavButton from '../../UI/navButton/navButton';
import Logo from '../../UI/logo/logo';

import './header.css';

const Header = () => {
    return(
        <div className="header">
            <div className="logoArea">
                <Link to="/"><Logo/></Link> 
            </div>
            <div></div>
            <div className="navArea">
                <Link to="/about-me"><NavButton value={"ABOUT ME"}/></Link> 
                <Link to="/projects"><NavButton value={"PROJECTS"}/></Link> 
            </div>  
        </div>
    );
}

export default Header;