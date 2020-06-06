import React from 'react';
import SocialLink from '../../UI/socialLink/socialLink';
import github from '../../../images/github.png';
import twitter from '../../../images/twitter.png'
import linkedin from '../../../images/linkedin.png'
import './footer.css';

const footer = () => {
    return(
        <footer>
            <div className="license">MIT Copyright © 2020 Rouqaya Abdulhaq</div>
            <div className="socialMediaLinks">
                <SocialLink url="https://github.com/rouqaya-abdulhaq" title="github" img={github}/>
                <SocialLink url="https://twitter.com/RouqayaAbdulhaq" title="twitter" img={twitter}/>
                <SocialLink url="https://www.linkedin.com/in/rouqaya-abdulhaq-91080116a/" title="linkedin" img={linkedin}/>
            </div>
        </footer>
    );
}

export default footer;