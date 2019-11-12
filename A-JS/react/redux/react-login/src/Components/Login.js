import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loginInfo:{
                 username : '',
                 password : '',
             }
        }
    }
handleForm = (e) => {
    
}
handleUsername = (e) => {
    
}
handlePassword = (e) => {

}
render() {
    return (
        <div>
            <h1>Fill the data and Login ! </h1>

            <form onSubmit = {this.handleForm}>

                <label htmlFor = 'username'>Username: </label>
                <input name = 'username' type = 'text'
                placeholder = 'your name' 
                value = {this.state.loginInfo.username}
                onChange = {this.handleUsername}
                />

                <label htmlFor = 'Password'>Password: </label>
                <input name = 'Password' type = 'password'
                placeholder = 'your password' 
                value = {this.state.loginInfo.password}
                onChange = {this.handlePassword}
                />

                <input name = 'submit' type = 'submit'/>
            </form>
        </div>
    )
}
}
