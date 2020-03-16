import React from 'react';
import './button.css';

const button = (props) =>{
    return(
        <button className="button">
            {props.value}
        </button>
    );
}

export default button;