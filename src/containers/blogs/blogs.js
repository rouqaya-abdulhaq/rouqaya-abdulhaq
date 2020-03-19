import React from 'react';
import './blogs.css';
import Card from '../../components/UI/card/card';
import {Link} from 'react-router-dom';

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [{info : "first Blog"}],
        }
    }

    render(){
        let blogToRender = null
        if(this.state.blogs){
            blogToRender = this.state.blogs.map((blog)=>{
                return <Link to="/blogs/blog"><Card info={blog.info}/></Link>
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

export default Blogs;