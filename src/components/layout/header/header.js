import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
             <Link to="/">logo  </Link>
             <div>nav buttons :
               <Link to="/about-me">ABOUT ME  </Link> 
               <Link to="/projects">Projects  </Link> 
            </div>  
        </div>
    );
}

export default Header;