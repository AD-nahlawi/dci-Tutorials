import React, { Component } from 'react'

export default class Ctime extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            timezone: '',
            time: 0
        }
    }



    static getDerivedStateFromProps(props,state){

        if (props.timezone.length > 0){
            return ( state.timezone = props.timezone, state.time = props.time )
        }else{
            return null;
        }
    }

    
    render() {

        return (
          
                <h2> <span>{this.props.timezone}</span>
                
                { this.state.time.toLocaleTimeString(
                        { timeZone : this.state.timezone } )  
                    }   
                </h2>                
        
        )
    }
}
