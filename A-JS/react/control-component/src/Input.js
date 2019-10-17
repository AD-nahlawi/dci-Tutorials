import React from 'react';


export default function Input(props) {

return (
    <div>
        <input
                id = 'todo'
                type = 'text' 
                placeholder = 'Enter the text' 
                value =    { props.value    }
                onChange = { props.onChange }
        />
        <span>{props.errorMessage}</span>
    </div>
)

}


export function Button(props){
    return(

        <button className = 'btn btn-info' 
        disabled = {props.disabled}> Click hier! </button>

    )
}