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
        }
    }

    toggleSideBarHandler = () =>{
        this.setState({
            showSideBar : !this.state.showSideBar
        }); 
    }

    render(){
        return(
            <div className="layout">
                <BrowserRouter>
                    <Header/>
                    <SideBar 
                        showSideBar={this.state.showSideBar}
                        toggleSideBarHandler = {this.toggleSideBarHandler}/>
                    <Router/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Layout;