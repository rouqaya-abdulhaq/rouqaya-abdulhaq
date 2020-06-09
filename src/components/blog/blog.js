import React, { useState, useEffect } from 'react';
import BackBtn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
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
                    <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" title="share">
                    <img src={facebook} alt="share on facebook"/>
                    </a>
                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" 
                        data-show-count="false" title="tweet">
                            <img src={twitter} alt="tweet"/>
                    </a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                </div>
            </div>
        </main>
    );
});

export default Blog;