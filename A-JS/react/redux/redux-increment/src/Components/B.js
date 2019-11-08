import React, { Component } from 'react';
import {connect} from 'react-redux';

class B extends Component {
    render() {
        return (
            <div>
                {/* B, x = {this.props.y + ' '} */}
                B, x = {this.props.x}

                <button onClick = { this.props.incrementY } >Increment Y </button>
            </div>
        )
    }
}



const mapStateToProps = ( state ) => ({
    // y  : state.y
    x  : state.x

})



// Action
const mapDispatchToProps = (dispatch) => ({  
    incrementY: () => dispatch( { type : 'INCREMENT_Y' } )
})

// export default A;
export default connect(mapStateToProps, mapDispatchToProps)( B );