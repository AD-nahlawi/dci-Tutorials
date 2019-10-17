import React from 'react';
import './App.css';
import Input from './Input';
import {Button} from './Input'

const handleSubmit = (onSubEvent) => {

    onSubEvent.preventDefault();
    // console.log( onSubEvent.target.todo.value );  // it take the id value OR name value of the input element
    console.log( onSubEvent.target['todo'].value );


}

function App() {
  return (
    <div className="App">
        <h2>Control Component in React : App.js</h2>
        <form onSubmit = { handleSubmit }>
                <label>input your text</label>
                <Input />
                <Button />
        </form>

    </div>
  );
}

export default App;
