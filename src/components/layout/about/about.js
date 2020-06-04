import React from 'react';
import SocialLink from "../../UI/link/link";
import {Link} from 'react-router-dom';
import Button from '../../UI/buttons/button/button';
import './about.css';

const about = () => {
    return(
        <main className="about">
            <p>
                Being a self taught developer has given me a whole new prespective on how to learn and 
                work. I have always been an excellent studen at school but I've never felt like i was really
                learning anything, i was lazy and abscent, I only knew how to get good grades.
                Due to events I've started to learn programming and got into the world of web development and
                i started to put more effort and pay attention to the detaills because a project done half 
                good is a bad envisment in the long run.
                <br/>
                every technology i work with i try to apply the best standard.
                <br/>
                and I'm still learning...   
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
        </main>
    );
}

export default about;