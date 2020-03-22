import React from 'react';
import TextArea from '../../../components/UI/textArea/textArea';

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

    render(){
        return(
            <main>
                <input onChange={this.titleEventHandler} placeholder="title"></input>
                <TextArea onChange={this.contentEventHandler}/>
            </main>
        );
    }
}

export default AddBlog;