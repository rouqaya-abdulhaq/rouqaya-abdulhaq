import React from 'react';
import './blogs.css';
import Card from '../../components/UI/card/card';

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
                return <Card info={blog.info}/>
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