import React from 'react'

export default function Counter(props) {
    return (
        <div className = 'Counter' onClick = {props.clicked}>
            Counter : {props.label}
        </div>
    )
}
