import React from 'react';
import './navButton.css';

const navButton = (props) => {
    return (
        <button className="navButton">
            {props.value}
        </button>
    );
}

export default navButton;