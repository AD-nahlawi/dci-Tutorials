import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route , NavLink } from 'react-router-dom';

import Home from './Components/Home.js'
import Login from './Components/Login.js'
import Registration from './Components/Registration.js'



class App extends React.Component{
  render(){
  return (
        <BrowserRouter>
        <div className = 'App'>

              <NavLink  className = '' to = '/Registration'>Registration</NavLink><br/>
              <NavLink  className = '' to = '/Login'>Login</NavLink>
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
