import React, { Component } from 'react';

const githubURL = 'https://jsonplaceholder.typicode.com/users';

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
                  users   : [ { name : '' } ],
                  index   : 0
  }
}

componentDidMount() {
console.log(this.state.users)
  fetch( githubURL )
  .then( json => json.json() )
  .then( data => { 
    this.setState( { users : data } )
  })
}

nextEntry(){
  
  setInterval(()=>{
    this.state.index < 9 ? this.setState({ index: ++this.state.index }) : this.setState({ index: 0 });
     console.log( this.state.index )
  },1000)
}


render() {

  return (
    <div>
      <button onClick = { /* () => this.nextEntry() */this.nextEntry.bind(this) } >Click</button>
      { this.state.users [ this.state.index ].name }
    </div>
  )
}


}
