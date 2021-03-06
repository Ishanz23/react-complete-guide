import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
    return <Person 
      click={props.click.bind(index)}
      change={(event) => props.change(event, person.id)}
      name={person.name}
      age={person.age}
      key={person.id}/>
  })

export default Persons;