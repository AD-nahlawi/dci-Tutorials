import React, { Component } from 'react'
import {connect} from 'react-redux';

import Counter from '../Component/Counter';
import CounterOutput from '../Component/CounterOutput';

function CounterContainer (props){

        return (
            <div>
                <CounterOutput value = {props.output} />

                <Counter label = 'Increment' clicked = {props.onIncrement}/>
                <Counter label = 'Decrement' clicked = {props.onDecrement}/>
            </div>
        )
    
}



const map_StateStore_ToProps = ( state_props ) => ({
        output : state_props.counter/* .Counter */
})

const map_DispatchAction_ToProps = ( dispatch_props ) => {
    return {
        onIncrement : () => dispatch_props ({ type: 'INCREMENT' }) ,
        onDecrement : () => dispatch_props ({ type: 'DECREMANT' })
    }
}

export default connect(map_StateStore_ToProps, map_DispatchAction_ToProps)(CounterContainer);