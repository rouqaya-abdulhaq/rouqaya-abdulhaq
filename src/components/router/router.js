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
            <Route path="/" exact component={LandingPage}/>
            <Route path="/about-me" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/blogs" exact component={Blogs}/>
            <Route path="/blogs/blog" component={Blog}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    );
}

export default Router;