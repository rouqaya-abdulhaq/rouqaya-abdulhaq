import React, { useState, useEffect } from 'react';
import BackBtn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import {FacebookShareButton,TwitterShareButton,LinkedinShareButton} from 'react-share';
import queryString from 'query-string';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png';
import './blog.css';


const Blog = withRouter(({history,location, ...props}) =>{

    const [hasError, setError] = useState(false);
    const [blog, setBlog] = useState({}); 

    const values = queryString.parse(location.search);

    const backEventHandler = () =>{
         history.goBack();
    }

    useEffect(() => {
        let mounted = true;
        fetch(`http://localhost:8000/loadBlog?blogTitle=${values.title}`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
        }).then((res)=>{
            return res.json();
        }).then((blog) => {
            if(mounted){
                setBlog(blog);
            }
        }).catch((err)=>{
            setError(err);
            console.log(hasError);
        });
        return () => mounted = false;
    })
    
    return(
        <main className="blog">
            <BackBtn onClick={backEventHandler} value="back"/>
            <div>
                <h1>{blog.title}</h1>
                <p>
                    {blog.content}
                </p> 
                <div className="share">
                    
                    <FacebookShareButton children={<img src={facebook} alt="share on facebook" title="share"/>} url={window.location.href} 
                    quote="my blog" hashtag="#blog"/>

                    <TwitterShareButton children={<img src={twitter} alt="tweet" title="tweet"/>} url={window.location.href}
                    title={blog.title} via="RouqayaAbdulhaq" hashtags={['blog',"development"]}/>

                    <LinkedinShareButton children={<img src={linkedin} alt="share with linkedin" title="share"/>} url={window.location.href}
                    title={blog.title} source="Rouqaya Abdulhaq"/>

                </div>
            </div>
        </main>
    );
});

export default Blog;