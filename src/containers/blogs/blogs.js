import React from 'react';
import './blogs.css';
import Card from '../../components/UI/card/card';
import {withRouter} from 'react-router-dom'

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [{content : "first Blog", title: "roro"},
                    {content : "words", title : "soso"}],
        }
    }

    goToBlog = (queryParam) =>{
        this.props.history.push(`/blogs/blog?blog=${queryParam}`);
    }

    render(){
        let blogToRender = null
        if(this.state.blogs){
            blogToRender = this.state.blogs.map((blog)=>{
                return <Card title={blog.title} onClick={()=>this.goToBlog(blog.title)}/>
            })
        }

        return(
            <main className="blogsPage">
                <h2>BLOGS :  </h2>
                <div className="blogs">
                    {blogToRender}  
                </div>
            </main>
        );
    }
}

export default withRouter(Blogs);