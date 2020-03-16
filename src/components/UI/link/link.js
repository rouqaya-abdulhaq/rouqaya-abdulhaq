import React from 'react';
import './link.css';

const link = (props) =>{
    return(
        <div className="link">
            {props.to}
        </div>
    );
}

export default link;