import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './Reducers/reducers'

import {saveStateToLocalStorge} from './Storage'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

      store.subscribe( () => {

        // console.log(store.getState())
        saveStateToLocalStorge(store.getState())
      })


ReactDOM.render(
    <Provider store = {store}>
            <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
