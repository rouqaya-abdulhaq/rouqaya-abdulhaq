import React from 'react';
import github from '../../../images/github.png';
import twitter from '../../../images/twitter.png'
import linkedin from '../../../images/linkedin.png'
import './footer.css';

const footer = () => {
    return(
        <footer>
            <div className="license">MIT Copyright © 2020 Rouqaya Abdulhaq</div>
            <div className="socialMediaLinks">
                <a href="https://github.com/rouqaya-abdulhaq" rel="noopener noreferrer" target="_blank" title="github"><img src={github} alt="github"/></a>
                <a href="https://twitter.com/RouqayaAbdulhaq" rel="noopener noreferrer" target="_blank" title="twitter"><img src={twitter} alt="twitter"/></a>
                <a href="https://www.linkedin.com/in/rouqaya-abdulhaq-91080116a/" rel="noopener noreferrer" target="_blank" title="linkedin"><img src={linkedin} alt="linkedin"/></a>
            </div>
        </footer>
    );
}

export default footer;