import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
     persons :[
       {name:"aziz", age:"20"},
       {name:"ahmet", age:"23"},
       {name:"mehmet", age:"24"}
     ],
     otherState: 'Some other value'
  }

  switchNameHandler = () => {
   // console.log("Switch Button is clicked.");
   // DON'T Do THIS --->  this.state.persons[0].name ="Aziz";
   this.setState({
    persons :[
      {name:"Aziz", age:"12"},
      {name:"Shmet", age:"13"},
      {name:"Mehmet", age:"14"}
    ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hi this is a react app.
        </h1>
        <p>This is the paragraph.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>        
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : coding!!</Person>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      // Only Return one single root element. Can't return more than one element.
    );
  //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m the react app.'))
  }
}

export default App;
