import React from 'react';
import Button from '../../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import './errorPage.css';

const ErrorPage = (props) => {

    const clickHomeHandler = () =>{
        props.history.push('/')
    }

    return (
        <main className="errPage">
            <h2>404 Error, The Page Doesn't Exist</h2>
            <Button value="back to home" onClick={clickHomeHandler}/>
        </main>
    );
}

export default withRouter(ErrorPage);