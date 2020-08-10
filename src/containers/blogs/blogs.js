import React from 'react';
import {withRouter} from 'react-router-dom';
import {mapBlogsToCards} from '../../utilities/utilities';
import Button from '../../components/UI/buttons/button/button';
import './blogs.css';
import ServerErr from '../../components/layout/errorPage/serverErr';
import Spinner from '../../components/UI/spinner/spinner';

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

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    getBlogsCount = () =>{
        fetch(this.proxyUrl + `https://rouqaya-api.herokuapp.com/getBlogsCount`,{
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
        this.props.loadingStarted();
        fetch(this.proxyUrl + `https://rouqaya-api.herokuapp.com/loadBlogs?loadCount=${this.state.loadCount}`,{
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
            this.props.loadingFinished();
        }).catch((err)=>{
            this.setState({hasErr : true});
            this.props.loadingFinished();
        })
    }

    getNextBlogs = () =>{
        if(this.state.loadCount < this.state.blogsCount){
            this.setState(prevState => {return {loadCount: prevState.loadCount += 1}});
            this.fetchBlogs();
        }
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
        let blogToRender = <p>No Blogs To Show</p>
        if(this.state.blogs.length > 0){
            blogToRender = this.state.hasErr ? <ServerErr data="blogs"/> : mapBlogsToCards(this.state.blogs,this.props.history);
        }

        const render = this.props.isLoading ? <Spinner/> : blogToRender

        return(
            <main className="blogsPage">
                <h2>BLOGS :  </h2>
                <div className="blogs">
                    {render}
                    <Button onClick={this.getPrevBlogs} value={"<"} 
                    disapled={disaplePrevBtn}/> 
                    <Button onClick={this.getNextBlogs} value={">"}
                    disapled={disapleNextBtn}/>
                </div>
            </main>
        );
    }
}

export default withRouter(Blogs);