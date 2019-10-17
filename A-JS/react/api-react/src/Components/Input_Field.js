import React from 'react'

export default function InputField(props) {
    return (
        <div>
            <input  onChange = { props.change } type='text' />
            <button onClick  = { props.click  }> Search </button>
        </div>
    )
}
