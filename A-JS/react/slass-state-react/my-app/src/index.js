import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer from './Timer';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Timer />, document.getElementById('root2'));


serviceWorker.unregister();
