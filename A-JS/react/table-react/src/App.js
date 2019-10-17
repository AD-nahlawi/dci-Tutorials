import React,{Component} from 'react';
import './App.css';

import TableHeader from './Components/TableHeader.js';
import TableBody from './Components/TableBody.js';


class App extends Component{

  state = {
    List: [   
      {id:1, name:'Ali',age: 20, email:'Ali@gmail.com'},
      {id:2, name:'Ahmad',age: 30, email:'Ahmad@gmail.com'},
      {id:3, name:'Anderias',age: 40, email:'Anderias@gmail.com'},
      {id:4, name:'Amer',age: 50, email:'Amer@gmail.com'},
      {id:5, name:'Andree',age: 60, email:'Andree@gmail.com'}
    ]   // List index = 0
  }


render() {
  return (
    <div className="App">
        <table id = "table">
            <thead>
                  <TableHeader list = { this.state.List }/>
            </thead>
            <tbody>
                  <TableBody list = {this.state.List}/> 
            </tbody>
        </table>
    </div>
  );
}
}

export default App;

