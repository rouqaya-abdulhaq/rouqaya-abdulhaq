import React from 'react';
import './modal.css';

const modal = (props) =>{
    return(
        <div className="modal">
            {props.children}
        </div>
    );
}

export default modal;