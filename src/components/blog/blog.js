import React, { useState, useEffect } from 'react';
import BackBtn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';


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
                    {blog.contenet}
                </p> 
            </div>
        </main>
    );
});

export default Blog;