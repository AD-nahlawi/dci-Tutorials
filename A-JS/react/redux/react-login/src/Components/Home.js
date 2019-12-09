import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../Actions/actions';
// import {Card, CardTitle, CardText, CardGroup,
//  CardBody} from 'reactstrap'
 class Home extends Component {

    handleRedirect = () =>{
        if(this.props.logedIn){
            return null
        }else{
            return <Redirect to = '/'/>
        }

    }

    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Welcome!!</h1>
                <h2>{this.props.user.username}</h2>
                <button onClick = {this.props.LogOutAction}>Log Out</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        user: state.logedUser,
        logedIn : state.logedIn
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        LogOutAction: () => {dispatch( logout() )}
    })
}
export default connect (mapStateToProps, mapDispatchToProps)(Home)