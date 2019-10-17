import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Home from './home.js';
import BootstrapApp from './Bootstrap-app.js';
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(<BootstrapApp />, document.getElementById('root'));
 


serviceWorker.unregister();
