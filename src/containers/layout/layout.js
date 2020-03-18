import React from 'react';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import Router from '../../components/router/router';
import{BrowserRouter} from 'react-router-dom';

import './layout.css';

class Layout extends React.Component{
    render(){
        return(
            <div className="layout">
                <BrowserRouter>
                    <Header/>
                    <Router/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Layout;