import React from 'react';
import BackBtn from '../UI/buttons/button/button';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';


const blog = withRouter(({history,location, ...props}) =>{

    const backEventHandler = () =>{
         history.goBack();
    }

    const values = queryString.parse(location.search);
    console.log(values.blog);

    return(
        <main>
            <BackBtn onClick={backEventHandler} value="back"/>
            <div>
                <h1>{values.blog}</h1>
                <p>
                    props.content
                </p> 
            </div>
        </main>
    );
});

export default blog;