import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from '../layout/landing/landing';
import About from '../layout/about/about';
import Projects from '../layout/projects/projects';

const Router = (props) =>{
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/about-me" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
        </Switch>
    );
}

export default Router;