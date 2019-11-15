import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout} from '../Actions/index';
import {Card, CardTitle, CardText, CardGroup,
 CardBody} from 'reactstrap'
 class Home extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
    
    handleRedirect = () =>{
        if(this.props.logedIn){
            return null
        }else{
            return <Redirect to = '/'/>
        }

    }

    fetchingData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((jsondata) => { return jsondata.json()})
        .then((data) => {

            data.map(data => {
                console.log(data.title)
                return (
                    <div>
                        <h3>{data.title}</h3>
                        <p> {data.body}</p>
                   </div>
                )
            });
        })
    
   
    

    }


    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Welcome!!</h1>
                <h2>{this.props.user.username}</h2>
                <button onClick = {this.props.LogOutAction}>Log Out</button>

                {this.fetchingData()}
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