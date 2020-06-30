import React from 'react';
import {withRouter} from 'react-router-dom';
import {mapBlogsToCards} from '../../utilities/utilities';
import Button from '../../components/UI/buttons/button/button';
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

    getNextBlogs = () =>{
        this.setState(prevState => {return {loadCount: prevState.loadCount += 1}});
        this.fetchBlogs();
    }

    getPrevBlogs = () =>{
        if(this.state.loadCount > 0){
            this.setState(prevState => {return {loadCount: prevState.loadCount -= 1}});
            this.fetchBlogs();
        }
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
                    <Button onClick={this.getPrevBlogs} value={"<"} 
                    disapled={this.state.loadCount <= 0 ? "true" : null}/> 
                    <Button onClick={this.getNextBlogs} value={">"}/>   
                </div>
            </main>
        );
    }
}

export default withRouter(Blogs);