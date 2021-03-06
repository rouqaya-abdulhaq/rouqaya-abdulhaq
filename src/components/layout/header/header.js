import React from 'react';
import { Link } from 'react-router-dom';

import NavButton from '../../UI/buttons/navButton/navButton';
import Logo from '../../UI/logo/logo';

import './header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="logoArea">
                <Link to="/" style={{textDecoration: 'none' , color : 'white',
                    fontWeight : 'bolder' , fontFamily : 'Lucidatypewriter, monospace',
                    fontSize : "1.7rem"}}>
                    <Logo/>
                </Link> 
            </div>
            <div></div>
            <div className="navArea">
                <Link to="/about-me"><NavButton value={"ABOUT ME"}/></Link> 
                <Link to="/projects"><NavButton value={"PROJECTS"}/></Link>
                <Link to="/blogs"><NavButton value={"BLOGS"}/></Link>  
            </div>  
        </header>
    );
}

export default Header;