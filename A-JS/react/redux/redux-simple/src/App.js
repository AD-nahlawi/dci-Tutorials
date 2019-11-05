import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {activateTarget, closeTarget} from './redux';

export default class App extends Component {
  render() {
return (

<div className ='App'>
  <h2>Redux with react</h2>
  <h2> { this.props.target.title || 'hello' } </h2>
  {
  this.props.target.title 

  ? ( <button onClick = {this.props.closeTarget}>closeTarget</button> ) 
  : ( <button onClick = {()=>this.props.activateTarget({ title :"i am your target"})}>activateTarget</button> )
  }

</div>


)
  }
}

// AppContainer
const mapStateToProps = ( state ) => ({
  target: state.target,
})

const mapDispatchToProps = {
  activateTarget,
  closeTarget
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)