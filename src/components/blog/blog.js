import React, { useState, useEffect } from 'react';
import Btn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton} from 'react-share';
import queryString from 'query-string';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import ServerErr from '../layout/errorPage/serverErr';
import {loadBlog,loadTranslation} from './assets/fetchCalls';
import './blog.css';


const Blog = withRouter(({history,location, ...props}) =>{

    const [hasError, setError] = useState(false);
    const [blog, setBlog] = useState({});
    const [translate , setTranslate] = useState(false); 

    const values = queryString.parse(location.search);

    const backEventHandler = () =>{
         history.goBack();
    }

    const translateHandler = () =>{
        setTranslate(!translate);
    }

    useEffect(() => {
        let mounted = true;
        if(!translate){
            loadBlog(values.id,setBlog,mounted,setError,props.loadingStarted,props.loadingFinished);
        }else if (translate){
            loadTranslation(values.id,setBlog,mounted,setError,props.loadingStarted,props.loadingFinished);
        }
        return () => mounted = false;
    },[values.id,translate,props.loadingStarted,props.loadingFinished]); 

    const translationBtn = translate ? <Btn onClick={translateHandler} value="English"/> : <Btn onClick={translateHandler} value="العربية"/>

    const content = hasError ? <ServerErr data={"blog"}/> 
                        : 
                            <div dir={translate ? "rtl" : "ltr"} >
                                <h1>{blog.title}</h1>
                                <p>
                                    {blog.content}
                                </p> 
                                {translationBtn}
                                <div className="share">
                                    
                                    <FacebookShareButton children={<img src={facebook} alt="share on facebook" title="share"/>} url={window.location.href} 
                                    quote="my blog" hashtag="#blog"/>

                                    <TwitterShareButton children={<img src={twitter} alt="tweet" title="tweet"/>} url={window.location.href}
                                    title={blog.title} via="RouqayaAbdulhaq" hashtags={['blog',"development"]}/>

                                    <LinkedinShareButton children={<img src={linkedin} alt="share with linkedin" title="share"/>} url={window.location.href}
                                    title={blog.title} source="Rouqaya Abdulhaq"/>

                                </div>
                            </div>
    
    return(
        <main className="blog">
            <Btn onClick={backEventHandler} value="back"/>
            {content}
        </main>
    );
});

export default Blog;