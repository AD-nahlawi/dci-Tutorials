import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,Switch, Route, Link
} from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
      <>
      <Router>
        <nav>
          <ul className = 'topbar'>
              <li className = 'mainLi bg-dark'>
                <Link to = '/home' >Home</Link>
              </li>

              <li className = 'mainLi bg-dark'>
                <Link to = '/about' >About</Link>
              </li>

              <li className = 'mainLi bg-dark'>
                <Link to = '/dashboard' >Dashboard</Link>
              </li>

              <li className = 'mainLi bg-dark'>
                <Link to = '/topics' >Topics</Link>
              </li>
          </ul>
        </nav>

        <hr/>

        <Switch>
          <Route /* exact */ path ='/home' >
            <Home/>
          </Route>

          <Route path ='/about'>
            <About/>
          </Route>

          <Route path ='/dashboard'>
            <Dashboard/>
          </Route>

          <Route path ='/topics'>
            <Topics/>
          </Route>
        </Switch>

      </Router>
      </>
  );
  }
}
export default App;
