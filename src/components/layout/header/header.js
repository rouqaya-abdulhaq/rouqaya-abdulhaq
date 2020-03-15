import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../../UI/navButton/navButton';
import Logo from '../../UI/logo/logo';

const Header = () => {
    return(
        <div>
             <Link to="/"><Logo/></Link>
             <div>
               <Link to="/about-me"><NavButton value={"ABOUT ME"}/></Link> 
               <Link to="/projects"><NavButton value={"PROJECTS"}/></Link> 
            </div>  
        </div>
    );
}

export default Header;