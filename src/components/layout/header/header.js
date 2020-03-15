import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../../UI/navButton/navButton';

const Header = () => {
    return(
        <div>
             <Link to="/">logo  </Link>
             <div>
               <Link to="/about-me"><NavButton value={"ABOUT ME"}/></Link> 
               <Link to="/projects"><NavButton value={"PROJECTS"}/></Link> 
            </div>  
        </div>
    );
}

export default Header;