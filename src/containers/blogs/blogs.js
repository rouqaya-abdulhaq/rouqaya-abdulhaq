import React from 'react';
import {withRouter} from 'react-router-dom';
import {mapBlogsToCards} from '../../utilities/utilities';
import './blogs.css';

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [],
        }
    }

    componentDidMount(){
        this.fetchBlogs();
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
            blogToRender = mapBlogsToCards(this.state.blogs,this.props.history);
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