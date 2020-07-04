import React from 'react';
import './errorPage.css';

const ErrorPage = (props) => {
    return (
        <main className="errPage">
            <h2>So Sorry, There Has Been An Error</h2>
            <p>{props.errMsg}</p>
            <p>our team has been notified and we will fix this problem very soon</p>
        </main>
    );
}

export default ErrorPage;