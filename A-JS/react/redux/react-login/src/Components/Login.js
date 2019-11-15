import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { checkLogin } from '../Actions/index'; 
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loginInfo:{
                 username : '',
                 password : '',
             }

        }
    }
handleRedirect = () => {
    if(this.props.redirect){
        return <Redirect to = '/Home'/>
    }else{
        return null
    }
}
handleForm = (e) => {
    e.preventDefault();
    this.props.LoginAction(this.state.loginInfo.username, this.state.loginInfo.password)
}
handleUsername = (e) => {
    this.setState({
        loginInfo:{
            ...this.state.loginInfo,
                username: e.target.value
        }
    })
}
handlePassword = (e) => {
    this.setState({
        loginInfo:{
            ...this.state.loginInfo,
                password: e.target.value
        }
    })
}
render() {
    return (
        <div>                {this.handleRedirect()}

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

const mapStateToProps = ( state ) => {
    return ({
        redirect : state.logedIn
    })
}
    

const mapDispatchToProps = ( dispatch ) => {
    return({ 
        LoginAction: ( username, password ) => dispatch( checkLogin( username, password ) ) 
    })
}

export default connect ( mapStateToProps, mapDispatchToProps )( Login )