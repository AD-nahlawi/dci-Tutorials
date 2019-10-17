import React, { Component } from 'react';
import Input from './Input';

import {Button} from './Input';


export default class AppClass extends Component {


constructor(props){
        super(props);


    this.state = {
        todo: ''
    }
}

handleOnchange = (e) => {
    this.setState({
        todo: e.target.value,
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.todo)
}
isValid = () => {
    if(this.state.todo === ''){
        return false;
    }else{
        return true;
    }
}
render() {

return (
    <div>
        <h2>Control Component in React : AppClass.js</h2>

        <form onSubmit = { this.handleSubmit } >
                <Input  value =    { this.state.todo     }
                        onChange = { this.handleOnchange }
                        errorMessage = { this.isValid() ? '' : 'This field is requierd' }
                />
                
                <Button disabled = { !this.isValid() } 
                        type ='submit'
                />
        </form>  
    </div>
)

}





}

