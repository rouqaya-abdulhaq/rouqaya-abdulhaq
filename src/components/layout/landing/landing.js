import React, {useEffect, useState} from 'react';
import Card from '../../UI/card/card';
import './landing.css';

const LandingPage = (props) => {

    const [hasError, setError] = useState(false);
    const [blogs, setBlogs] = useState([]);
    
    
    useEffect(() => {
        fetch(`http://localhost:8000/loadLastBlogs`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
        }).then((res)=>{
            return res.json();
        }).then((blogs) => {
            setBlogs(blogs);
        }).catch((err)=>{
            setError(err);
            console.log(hasError);
        });
    });

    let blogsToRender = [];
    if(blogs){
        blogsToRender = blogs.map((blog)=>{
            return <Card key={blog.title} title={blog.title} />
        })
    } 

    return(
        <main>
            <h1>welcome to my online presence</h1>
            <section className="blogsArea">
                <div className="blogsTape">
                    <div className="firstAnimation">
                        {blogsToRender[0] ? blogsToRender[0] : null}
                    </div>
                  <div className="secondAnimation">
                        {blogsToRender[1] ? blogsToRender[1] : null}
                    </div>
                    <div className="thirdAnimation">
                        {blogsToRender[2] ? blogsToRender[2] : null}
                    </div>
                    <div className="fourthAnimation">
                        {blogsToRender[3] ? blogsToRender[3] : null}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;