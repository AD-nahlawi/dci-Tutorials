import React, { Component } from 'react';
import Person from './person';


export default class App extends Component {
//the state is used as a variable with many objects
  state={
    persons:[
      {name:"max",city:"essen",job:"Doctor"},
      {name:"Anna",city:"Berlin",job:"Driver"},
      {name:"Romal",city:"Dortmund",job:"Journalist"},
    ]
  }


  // we can make a function to change our previous State
changeState = () => {
  this.setState({
      persons:[
        {name:"Sebastian",city:"Barankia",job:"PHD"},
      ]
  })
}
  render() {
    return (
      <div>
        <h1>React class Components and States</h1>

        {/*a person called from a normal function as a props from Person.js*/}
        <Person name="Lars" city="Hannover" job="Web-designer"/>

        <hr />


        {/*a person called from a class Component as an Object using State */}
       
        <Person name={this.state.persons[0].name} city={this.state.persons[0].city} job={this.state.persons[0].job} />

        {/* we didnt put this.state.ChangeState here because the functiin is outside the State */}
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
