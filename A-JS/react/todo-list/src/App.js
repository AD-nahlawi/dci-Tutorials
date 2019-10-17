 import React/* ,{Component} */ from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputTodo, Add_Button} from './ListTodo';
import ListTodo from './ListTodo';

export default class TodoList extends React.Component{

state = {
          todoValue: '',
          todoList: []
        }

Add_Todo_function( event ){
  this.setState( { todoValue: event.target.value } );
  // console.log( event.target.value )
}
addToDo(){
    let list = this.state.todoList;
    list.push( this.state.todoValue );
    this.setState( { 
          todoList: list , todoValue:'' 
    } );
    // console.log( this.state.todoList );
}
isValid = () => {
  if (this.state.todoValue === ''){
      return false;
  }else{
    return true;
  }
}
DeleteTask = ( item ) => {

  let myList = this.state.todoList;
  myList.splice( item , 1 );

  this.setState({
    todoList: myList
  })
  // console.log(myList);
    alert('it has removed!')

}
render(){
return( 
<div>

  <InputTodo todoValue = { this.state.todoValue } 
             changed = { ( event ) => this.Add_Todo_function( event ) }
            //  value = ''
  />

  <Add_Button onClick = { () => this.addToDo() } 
              disabled = { !this.isValid() }
  /> 

  <h2>please add a Task</h2>

  <ListTodo  list   = { this.state.todoList }
             remove = { ( item ) =>  this.DeleteTask( item ) }
  />

</div>
) 
}
}


// export default TodoList;



