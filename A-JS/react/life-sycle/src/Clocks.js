import React, { Component } from 'react';
import Ctime from './Ctime';

export default class Clocks extends Component {
    constructor( props ){
          super( props );
          this.state = {
              countries:['Europe/Berlin','Asia/Damascus','America/Sao_Paulo','Africa/Dakar'],
              time: new Date()
          }
    }

    componentDidMount(){
        
        this.timer = setInterval(
            () => this.tick(),1000
        );
    }

    tick = () => {
        this.setState( { time : new Date() } )
    }

    render() {
        let elements = this.state.countries.map((item,index)=>{
            return (
                <div key = { index }>
                    <Ctime  id =        { index }
                            time =      { this.state.time }
                            timezone =  { item } 
                    />
                </div>
            )
        })

        return (
            
            <div>
                    {elements}
            </div>
        )
    }
}