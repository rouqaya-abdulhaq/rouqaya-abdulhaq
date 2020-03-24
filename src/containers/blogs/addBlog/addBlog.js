import React from 'react';
import TextArea from '../../../components/UI/textArea/textArea';
import SubmitBtn from '../../../components/UI/buttons/button/button';
import { withRouter } from 'react-router-dom';
import './addBlog.css'


class AddBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blog : {
                title : "",
                content : ""
            }
        }
    }

    titleEventHandler = (event) =>{
        this.setState({
            blog :  {
                title : event.target.value,
                content : this.state.blog.content
            }
        })
    }

    contentEventHandler = (event) =>{
        this.setState({
            blog :  {
                content : event.target.value,
                title : this.state.blog.title
            }
        })
    }

    submitBlogHandler = () =>{
        console.log(this.state.blog.title);
        console.log(this.state.blog.content);
        this.props.history.replace('/blogs/blog');
    }

    render(){
        return(
            <main className="addBlogPage">
                <input onChange={this.titleEventHandler} placeholder="title"></input>
                <TextArea onChange={this.contentEventHandler}/>
                <SubmitBtn value="SUBMIT" onClick={this.submitBlogHandler}/>
            </main>
        );
    }
}

export default withRouter(AddBlog);