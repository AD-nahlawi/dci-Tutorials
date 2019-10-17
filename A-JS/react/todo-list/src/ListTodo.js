import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ListTodo = ( props ) =>{
    let listOfItems;

    if ( !props.list.length > 0 ){
        // 
    }
    else{

        listOfItems = props.list.map( ( item, index ) => {
                return ( <h3 className="App text-primary" key = { index }>
                            { item }
                            <button 
                                className = 'btn btn-danger'
                                onClick = { props.remove }
                            >X</button>
                         </h3> 
                        ) 
         } )
    }

    return( <div> { listOfItems } </div> );
}

function  InputTodo( props ){
return(

<input 
    // value = {props.value}
    className ='form-control'
    type = "text" 
    placeholder = 'Enter New Task'
    value = { props.todoValue }
    onChange = { ( event ) => { props.changed( event ) } }
/>
)

}
function Add_Button (props){
    return(
        <button className = 'btn btn-dark'
        onClick = {props.onClick}
        disabled = {props.disabled}
        >
            Click
        </button>
    )
}


export default ListTodo;
export  {InputTodo, Add_Button};