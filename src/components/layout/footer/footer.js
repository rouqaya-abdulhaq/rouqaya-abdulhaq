import React from 'react';
import Link from '../../UI/link/link';
import './footer.css';

const footer = () => {
    return(
        <footer>
            <div className="license">MIT Copyright © 2020 Rouqaya Abdulhaq</div>
            <div className="socialMediaLinks">
                <Link to="Linked In"/>
                <Link to="Twitter"/>
                <Link to="GitHub"/>
            </div>
        </footer>
    );
}

export default footer;