import React from 'react';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import Router from '../../components/router/router';
import{BrowserRouter} from 'react-router-dom';

class Layout extends React.Component{
    render(){
        return(
            <div>
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