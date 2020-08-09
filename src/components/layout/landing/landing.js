import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import {mapBlogsToCards} from '../../../utilities/utilities';
import ServerErr from '../errorPage/serverErr';
import './landing.css';

const LandingPage = (props) => {

    const [hasError, setError] = useState(false);
    const [blogs, setBlogs] = useState([]);
    
    const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    useEffect(() => {
        let mounted = true;
        fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/loadLastBlogs`,{
        method : 'GET',
        headers : {
            'Accept': 'application/json',
        }
        }).then((res)=>{
            return res.json();
        }).then((res) => {
            if(mounted){
                if(res.success){
                    setBlogs(res.blogs);
                }
            }
        }).catch((err)=>{
            setError(err);
        });
        return () => mounted = false;
    });

    let blogsToRender = [];
    if(blogs){
        blogsToRender = mapBlogsToCards(blogs, props.history);
    } 

    const blogsContent = hasError ? <ServerErr data="blogs"/>
                                  : <div className="blogsTape">
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

    return(
        <main>
            <h1>welcome to my online presence</h1>
            <section className="blogsArea">
                {blogsContent}
            </section>
        </main>
    );
}

export default withRouter(LandingPage);