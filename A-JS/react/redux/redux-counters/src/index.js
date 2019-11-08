import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import counterReducer from './Store/Reducer/CounterReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const store = createStore(counterReducer)
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store = {store}> <App/> </Provider>, document.getElementById('root'));



serviceWorker.unregister();
