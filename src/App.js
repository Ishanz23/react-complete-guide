import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Characters from './Characters/Characters';

class App extends Component {

  state = {
    persons: [{
        id: 'sda',
        name: 'Sayantan',
        age: 26
      },
      {
        id: 'sdb',
        name: 'Max',
        age: 28,
        hobby: 'Programming'
      },
      {
        id: 'fsa',
        name: 'Saidul',
        age: 27,
        hobby: 'Nothing'
      }
    ],
    showPersons: false,
    fun: '',
  };

  buttonStyle = {
    backgroundColor: '#EC407A',
    color: 'white',
    padding: '0.5rem',
    font: 'inherit',
    border: 'none',
    boxShadow: '0 2px 2px indigo',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#FF4081'
    }

  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.id;
    });
    const person = persons[personIndex];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({persons: persons});
  };
  
  funChangeHandler = (event) => {
    this.setState({fun: event.target.value});
  };

  deleteChar = (index) => {
    const funChars = this.state.fun.split('');
    funChars.splice(index, 1);
    this.setState({
      fun: funChars.join(''),
    });
  };

  render() {
    let persons = null;

    const funCharacters = (
      <div>
        {
          this.state.fun.split('').map((ch, index) => <Characters char={ch} key={index} click={this.deleteChar.bind(this, index)}/>)
        }
      </div>
    );

    const togglePersonsHandler = () => {
      let displayPersons = !this.state.showPersons;
      this.setState({showPersons: displayPersons});      
    };

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={this.deletePersonHandler.bind(this, index)}
              change={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}/>
          })}
        </div>        
      );
      
    }

    return (
      <StyleRoot>      
        <div className = {classes.App} >
          <h1 className = {classes.title}> My First React App </h1>
          <button style={this.buttonStyle} onClick = {togglePersonsHandler}> Toggle Persons </button>
          <div className = {classes.fun}>
            <input type="text" onChange={event => this.funChangeHandler(event)} value={this.state.fun} />
            <p className={classes['fun-desc']}>Length of {this.state.fun} : {this.state.fun.length}</p>
            <Validation funLength={this.state.fun.length}/>
          </div>
          {funCharacters}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);