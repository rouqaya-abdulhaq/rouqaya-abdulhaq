import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from '../layout/landing/landing';
import About from '../layout/about/about';
import Projects from '../layout/projects/projects';
import Blogs from '../../containers/blogs/blogs';
import Blog from '../blog/blog';
import AddBlog from '../../containers/blogs/addBlog/addBlog';
 
const Router = (props) =>{
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/about-me" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/blogs" exact component={Blogs}/>
            <Route path="/blogs/blog" component={Blog}/>
            <Route path="/blogs/addBlog" component={AddBlog}/>
        </Switch>
    );
}

export default Router;