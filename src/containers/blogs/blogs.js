import React from 'react';
import {withRouter} from 'react-router-dom';
import {mapBlogsToCards} from '../../utilities/utilities';
import './blogs.css';

class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [],
            loadCount : 0
        }
    }

    componentDidMount(){
        this.fetchBlogs();
    }
    
    fetchBlogs = () =>{
        fetch(`http://localhost:8000/loadBlogs?loadCount=${this.state.loadCount}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                this.setState({blogs : res.blogs});
            }
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