import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route , Link } from 'react-router-dom';
import Header from './components/Header';
import Me from './components/Me'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <div className = 'navbar'>
            <li>
              <Link  className = 'me' to = '/me' >Me</Link>
            </li>
            <li>
              <Link  className = 'hobbies' to = '/hobbies'>Hobbies</Link>
            </li>
            <li>
              <Link  className = 'contact' to = '/contact'>Contact</Link>
            </li>
        </div>
        <h1>
          <Switch>
            <Route exact path = '/' component = {Me}></Route>
            <Route path = '/me' component = {Me}></Route>
            <Route path = '/hobbies' component = {Hobbies}></Route>
            <Route path = '/contact' component = {Contact}></Route>
          </Switch>
        </h1>
      </BrowserRouter>
  );
}

export default App;
