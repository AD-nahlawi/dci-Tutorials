import React, { Component } from 'react';
import {connect} from 'react-redux';

class C extends Component {
    render() {
        return (
            <div>
                {/* C, y = {this.props.x + ' '} */}
                C, y = {this.props.y}
                <button onClick = { this.props.incrementX } >Increment X </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // x  : state.x
    y  : state.y

})

// Action
const mapDispatchToProps = (dispatch) => ({  
    incrementX: () => dispatch( { type : 'INCREMENT_X' } )
})

// export default A;
export default connect(mapStateToProps, mapDispatchToProps)(C);