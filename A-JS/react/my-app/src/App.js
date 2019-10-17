import React from 'react';
 import logo from './logo.svg';
 import './App.css';









function App(props) {
  return (

  <table width="100%">
    <thead>
      <tr>

        <th className = "header"  >login</th>
        <th className = "header"  >id</th>
        <th className = "header"  >type</th>
      </tr>

    </thead>
    <tbody >
{
  props.x.map(element => {
    return (
          <tr>
              <td className = "row" >{ element.login }</td>
              <td className = "row"  >{ element.id }</td>
              <td className = "row"  >{ element.type }</td>
          </tr>
          )

  })       
}
    </tbody>
</table>
);
}


export default App;
