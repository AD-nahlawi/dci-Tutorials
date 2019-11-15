import React from 'react'

export const loadStateFromLocalStorge = () => {

    const data = localStorage.getItem('state');
    if (data === null){
        return null
    }else{
        return ( JSON.parse( data ))
    }
}

export const saveStateToLocalStorge = (state) => {

    let data = JSON.stringify(state)
    localStorage.setItem('state', data)
    console.log('saved successfuly');
}



export const ClearLocalStorge = (props) => {
    if( localStorage.getItem('state') !== null){
        return <button onClick = {props.onClick}>Clear</button>
    }else{
        return null
    }
    
}