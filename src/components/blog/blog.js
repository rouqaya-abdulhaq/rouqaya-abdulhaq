import React from 'react';


const blog = (props) =>{
    return(
        <main>
            <h1>props.title</h1>
            <p>
                props.content
            </p>
        </main>
    );
}

export default blog;