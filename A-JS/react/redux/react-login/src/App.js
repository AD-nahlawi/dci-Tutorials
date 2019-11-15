import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route , NavLink } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Login'
import Registration from './Components/Registration'
import {ClearLocalStorge} from './Storage'


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  clear = () =>{
      localStorage.clear();
  }

  render(){
  return (
        <BrowserRouter>
        <div className = 'App'>

              <NavLink  className = '' to = '/Registration'>Registration</NavLink><br/>
              <NavLink  className = '' to = '/Login'>Login</NavLink><br/>

              <ClearLocalStorge onClick = {()=> this.clear ()}></ClearLocalStorge>

        </div>

        <div className = 'App'>

          <Switch>
            <Route exact path = '/' >
              <h1>Click Login or Registration to enter home site!!</h1>
            </Route>
            <Route path = '/Home' component = {Home}></Route>
            <Route path = '/Login' component = {Login}></Route>
            <Route path = '/Registration' component = {Registration}></Route>
          </Switch>
        </div>
        </BrowserRouter>
  )}
}

export default App;
