import React from 'react';
import '../App.css';





function Todo(){
    return(

        <ul className = "ul">
            <li className = "li">mojombo	1	User</li>
            <li className = "li">defunkt	2	User</li>
            <li className = "li">pjhyett	3	User</li>
        </ul>
 
    )
}

function Person(props){
    return(
      // jsx code
      <div className="person">
        <h1>{props.name}</h1>
        <p>{props.job}</p>
      </div>
    ); 
  }




  export default Todo;
  export { Person };

