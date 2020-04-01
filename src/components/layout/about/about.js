import React from 'react';
import SocialLink from "../../UI/link/link";
import {Link} from 'react-router-dom';
import Button from '../../UI/buttons/button/button';
import SideBar from '../sideBar/sideBar';
import './about.css';

const about = () => {
    return(
        <main className="about">
            <p>
                I'm a self taught web developer.
                I'm syrian currently living in Jordan
            </p>
            <div>
                you can find me here on the internet :
                <SocialLink to="Twitter"/>
                <SocialLink to="Linked In"/>
                <SocialLink to="GitHub"/>
            </div>
            <div>
                and check out some of my projects :
                <Link to="./projects"><Button value="projects"/></Link>
            </div>
            <SideBar/>
        </main>
    );
}

export default about;