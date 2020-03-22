import React from 'react';
import './textArea.css';

const textArea = (props) =>{
    return(
        <textarea onChange={props.onChange}></textarea>
    );
}

export default textArea