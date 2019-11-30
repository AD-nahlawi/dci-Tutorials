import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class Timer extends Component {

    constructor(props){

        super(props);
        this.state={
            counter: 0,
            message:"click here",
        }
    }

 
    btnClick =()=>{
      

        this.setState({
           counter: this.state.counter + 100000 / 2 * 4,
           message:'btn was Clicked'
        })
    }

    render() {
        return (
            <div>
                <h5>{this.state.counter}</h5>
                <button className="btn btn-info" onClick={this.btnClick}>{this.state.message}</button>
            </div>
        )
    }
}
