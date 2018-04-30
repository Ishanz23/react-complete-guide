import React from 'react';
import './Characters.css';

const Characters = (props) => {
    return (
        <p className="Characters" onClick={props.click}>{props.char}</p>
    )
};

export default Characters;