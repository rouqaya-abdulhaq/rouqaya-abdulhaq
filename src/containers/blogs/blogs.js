import React from 'react';
import {withRouter} from 'react-router-dom';
import {mapBlogsToCards} from '../../utilities/utilities';
import Button from '../../components/UI/buttons/button/button';
import './blogs.css';
import ServerErr from '../../components/layout/errorPage/serverErr';

export class Blogs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogs : [],
            loadCount : 0,
            blogsCount : 0,
            hasErr : false,
        }
    }


    componentDidMount(){
        this.fetchBlogs();
        this.getBlogsCount();
    }

    getBlogsCount = () =>{
        fetch(`http://localhost:8000/getBlogsCount`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                this.setState({blogsCount : res.count});
            }
        }).catch((err)=>{
            this.setState({hasErr : true})
        })
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
            this.setState({hasErr : true})
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
        const disaplePrevBtn = this.state.loadCount <= 0 ? "true" : null;
        const disapleNextBtn = this.state.loadCount >= this.state.blogsCount ? "true" : null;
        let blogToRender = null
        if(this.state.blogs){
            blogToRender = this.state.hasErr ? <ServerErr data="blogs"/> : mapBlogsToCards(this.state.blogs,this.props.history);
        }

        return(
            <main className="blogsPage">
                <h2>BLOGS :  </h2>
                <div className="blogs">
                    {blogToRender}
                    <Button onClick={disaplePrevBtn ? ()=>{} : this.getPrevBlogs} value={"<"} 
                    disapled={disaplePrevBtn}/> 
                    <Button onClick={disapleNextBtn ? () =>{} : this.getNextBlogs} value={">"}
                    disapled={disapleNextBtn}/>   
                </div>
            </main>
        );
    }
}

export default withRouter(Blogs);