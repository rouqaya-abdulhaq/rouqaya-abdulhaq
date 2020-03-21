import React from 'react';
import './button.css';

const button = (props) =>{
    return(
        <button onClick={props.onClick} className="button">
            {props.value}
        </button>
    );
}

export default button;