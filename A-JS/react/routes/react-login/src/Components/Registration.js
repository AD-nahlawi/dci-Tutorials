import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { saveRegistration } from '../Actions'

class Registration extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            userinfo:{
                username:'',
                age:'',
                password:'',
            },
            redirect: false

        }
    }

    handleForm = (e) => {
        e.preventDefault();
        this.props.RegisterUser (this.state.userinfo);
        this.setState({redirect: true})
    }

    handleRedirect = () => {
        if (this.state.redirect){
            return <Redirect to = '/Home'/>
        }else{
            return null
        }
    }

    handleUsername = (e) =>{
        this.setState({
            userinfo: {
                ...this.state.userinfo,
                username: e.target.value 
            }
   
        })
    }
    handleAge = (e) => {
        this.setState({
            userinfo: {
                ...this.state.userinfo,
                age: e.target.value
            }
        })
    }
    handlePassword = (e) => {
        this.setState({
            userinfo: {
                ...this.state.userinfo,
                password: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Fill the data and register ! </h1>
                <form onSubmit = {this.handleForm}>

                    <label htmlFor = 'username'>Username: </label>
                    <input name = 'username' type = 'text'
                    placeholder = 'your name' 
                    value = {this.state.userinfo.username}
                    onChange = {this.handleUsername}
                    />

                    <label htmlFor = 'age'>Age: </label>
                    <input name = 'age' type = 'text'
                    placeholder = 'your age' 
                    value = {this.state.userinfo.age}
                    onChange = {this.handleAge}
                    />

                    <label htmlFor = 'Password'>Password: </label>
                    <input name = 'Password' type = 'password'
                    placeholder = 'your password' 
                    value = {this.state.userinfo.password}
                    onChange = {this.handlePassword}
                    />

                    <input name = 'submit' type = 'submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return({
        usersArray : state.usersArray
    })
}
const mapDispatchToProps = (dispatch) => ({

    RegisterUser: (userinfo) => dispatch(saveRegistration(userinfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration)