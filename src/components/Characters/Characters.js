import React from 'react';
import classes from './Characters.css';

const Characters = (props) => {
    return (
        <p className={classes.Characters} onClick={props.click}>{props.char}</p>
    )
};

export default Characters;