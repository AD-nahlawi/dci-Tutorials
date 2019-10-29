import React from 'react';
import './App.css';
import {
  BrowserRouter, Router,Switch, Route, Link
} from 'react-router-dom' ;
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navigator from './components/Navigator';

function App() {
  return (
    <BrowserRouter>
    <Navigator/>
      <Switch>
          <Route path = '/about' component = { About }/>
          <Route path = '/' component = { Home } />
          <Route  component = { Error } />
      </Switch>
    </BrowserRouter>
  )
}
export default App;

