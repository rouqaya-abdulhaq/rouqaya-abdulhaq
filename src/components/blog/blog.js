import React from 'react';
import BackBtn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';


const blog = withRouter(({history, ...props}) =>{

    const backEventHandler = () =>{
        history.goBack();
    }

    return(
        <main>
            <BackBtn onClick={backEventHandler} value="back"/>
            <div>
                <h1>props.title</h1>
                <p>
                    props.content
                </p> 
            </div>
        </main>
    );
});

export default blog;