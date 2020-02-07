import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navbar'
import List from './Components/List'
import NewMovie from './Components/NewMovie'
import Users from './Components/Users'
import Contacts from './Components/Contacts'

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
            <Route path="/list" exact>
                <List />
            </Route>
            
            <Route path="/newMovie" >
                <NewMovie/>
            </Route>

            <Route path="/users" >
                <Users/>
            </Route>
            <Route path="/contacts" >
                <Contacts/>
            </Route>
        </Switch>
      </Router>
    )
  }
}
