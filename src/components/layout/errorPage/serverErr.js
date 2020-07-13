import React from 'react';

const serverErr = (props) =>{
    return(
        <div className="serverErr">
            <p>Could not reach server to load {props.data}, an error may have occurred.</p>
            <p>please try again later</p>
        </div>
    );
}

export default serverErr;