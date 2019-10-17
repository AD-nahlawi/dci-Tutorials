import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todo from './todo/todo.js';
import {Person} from './todo/todo.js';




fetch('https://api.github.com/users')
.then(function(json){

    return json.json();

})

.then(function(data){

    ReactDOM.render(< App x = { data } />,document.getElementById('root'));
           
});


  
  var app = ( 
    <div class="row">
      <h4>< Person name = "mansour" job = "re developer" /></h4>
      <h4>< Person name = "ahmad" job = "re developer" /></h4>
    </div>
);





ReactDOM.render(< Person name = "peter" job = "re developer" />,
document.querySelector('#result1'));

ReactDOM.render(< Person name = "dan" job = "re developer" />,
document.querySelector('#result2'));

ReactDOM.render(app, document.querySelector('#result3'));


ReactDOM.render(<Todo/>,document.querySelector('#todo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
