import React from 'react'

export default function Users() {
    return (
        <div className = 'container form-group'>
            <h1>Add new User</h1>
            <label htmlFor='users'>List Users</label>
            <input
                name='users'
                type = 'text'
                className = 'form-control'
            />

            <button className = 'btn btn-info' >Click</button>
            
        </div>
    )
}
