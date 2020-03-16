import React from 'react';
import Link from '../../UI/link/link';
import './footer.css';

const footer = () => {
    return(
        <footer>
            <div className="license">license</div>
            <div className="socialMediaLinks">
                <Link to="Linked In"/>
                <Link to="Twitter"/>
                <Link to="GitHub"/>
            </div>
        </footer>
    );
}

export default footer;