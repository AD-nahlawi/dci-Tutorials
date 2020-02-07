import React from 'react'

export default function Contacts() {
    return (
        <div className = 'container form-group'>
            <h1>Add new Contact</h1>
            <label htmlFor='contacts'>List Contacts</label>
            <input
                name='contacts'
                type = 'text'
                className = 'form-control'
            />

            <button className = 'btn btn-info' >Click</button>
            
        </div>
    )
}
