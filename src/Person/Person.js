import React from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './Person.css';

const Person = (props) => {
    const style = {
        '@media (min-width: 640px)':{
            width: '400px'
        }
    };
    return (
        <div className={classes.Person} style={style}>
            <p>Name: {props.name}, Age: {props.age}</p>
            <p>Hobby: {props.children}</p>
            <input type="text" onChange = {props.change} value = {props.name} />
            <button onClick={props.click}>Delete</button>
        </div>
    );
}; 

export default Radium(Person);