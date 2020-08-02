import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from '../layout/landing/landing';
import About from '../layout/about/about';
import Projects from '../../containers/projects/projects';
import Blogs from '../../containers/blogs/blogs';
import Blog from '../blog/blog';
import NotFound from '../layout/errorPage/404Page';
 
const Router = (props) =>{
    return(
        <Switch>
            <Route path="/" exact render={()=> <LandingPage loadingStarted={props.loadingStarted} loadingFinished={props.loadingFinished}/>}/>
            <Route path="/about-me" exact render={()=> <About loadingStarted={props.loadingStarted} loadingFinished={props.loadingFinished}/>}/>
            <Route path="/projects" exact render={()=> <Projects loadingStarted={props.loadingStarted} loadingFinished={props.loadingFinished}/>}/>
            <Route path="/blogs" exact render={()=> <Blogs loadingStarted={props.loadingStarted} loadingFinished={props.loadingFinished}/>}/>
            <Route path="/blogs/blog" render={()=> <Blog loadingStarted={props.loadingStarted} loadingFinished={props.loadingFinished}/>}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}

export default Router;