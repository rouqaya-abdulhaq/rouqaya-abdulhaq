import React from 'react';
import './button.css';

const button = (props) =>{
    const disaple = props.disapled ? "disapled" : null;
    return(
        <button onClick={props.onClick}  className={`button ${disaple}`}>
            {props.value}
        </button>
    );
}

export default button;