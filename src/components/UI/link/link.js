import React from 'react';
import './link.css';

const link = (props) =>{
    return(
        <div className="link">
            <a href={props.to} rel="noopener noreferrer" target="_blank"><i>{props.value}</i></a>
        </div>
    );
}

export default link;