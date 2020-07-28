import React, {useEffect, useState} from 'react';
import SocialLink from "../../UI/socialLink/socialLink";
import {Link} from 'react-router-dom';
import Button from '../../UI/buttons/button/button';
import github from '../../../images/github.png';
import twitter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import './about.css';

const About = () => {
    const [hasError, setError] = useState(false);
    const [content, setContent] = useState(``);

    useEffect(() => {
        let mounted = true;
        fetch(`http://localhost:8000/loadAbout`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
        }).then((res)=>{
            return res.json();
        }).then((res) => {
            if(mounted){
                if(res.success){
                    setContent(res.about.content);
                }
            }
        }).catch((err)=>{
            setError(err);
            console.log(hasError);
        });
        return () => mounted = false;
    });

    let text = "";

    if(content){
        text = content.split('\n').map(i => {
            return <p key={i}>{i}</p>
        });
    }

    return(
        <main className="about">
            <div className="p">
                {text} 
            </div>
            <div>
                you can find me here on the internet :
                <SocialLink url="https://github.com/rouqaya-abdulhaq" title="github" img={github}/>
                <SocialLink url="https://twitter.com/RouqayaAbdulhaq" title="twitter" img={twitter}/>
                <SocialLink url="https://www.linkedin.com/in/rouqaya-abdulhaq-91080116a/" title="linkedin" img={linkedin}/>
            </div>
            <div>
                and check out some of my projects :
                <Link to="./projects"><Button value="projects"/></Link>
            </div>
        </main>
    );
}

export default About;