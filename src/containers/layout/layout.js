import React from 'react';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import Router from '../../components/router/router';
import SideBar from '../../components/layout/sideBar/sideBar';
import{BrowserRouter} from 'react-router-dom';

import './layout.css';

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSideBar : false,
            loading : false,
        }
    }

    toggleSideBarHandler = () =>{
        this.setState({
            showSideBar : !this.state.showSideBar
        }); 
    }

    loadingStarted = () =>{
        this.setState({loading : true});
    }

    loadingFinished = () =>{
        this.setState({loading : false});
    }

    render(){
        console.log(this.state.loading);
        return(
            <div className="layout">
                <BrowserRouter>
                    <Header/>
                    <SideBar 
                        showSideBar={this.state.showSideBar}
                        toggleSideBarHandler = {this.toggleSideBarHandler}/>
                    <Router
                        loadingStarted= {this.loadingStarted}
                        loadingFinished= {this.loadingFinished}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Layout;