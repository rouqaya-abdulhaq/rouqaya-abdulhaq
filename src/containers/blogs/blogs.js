import React from 'react';
import './blogs.css';
import Card from '../../components/UI/card/card';
import {withRouter} from 'react-router-dom'

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [],
        }
    }

    componentWillMount(){
        this.fetchBlogs();
    }

    goToBlog = (queryParam) =>{
        this.props.history.push(`/blogs/blog?blog=${queryParam}`);
    }

    fetchBlogs = () =>{
        fetch('http://localhost:8000/loadBlogs?loadCount=0',{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((blogs)=>{
            this.setState({blogs : blogs});
        }).catch((err)=>{
            console.log(err);
        })
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