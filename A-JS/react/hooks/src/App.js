import React ,{useState, useEffect} from 'react';
// usStatee is allow me to manage State from funczion component
// useEffect is similar componentDidMount componentDidUpdate in react life cycle
import './App.css';


function App() {
  const [counter, setCounter] = useState(10)

  useEffect( () => {

    document.title = ` you clicked ${counter} times `
  })
  return (

    <div className="App">
       <p> you Clicked {counter} times</p>


       <button onClick = { ()=> setCounter(counter + 1  ) }> Clich me</button>
    </div>
  );
}

export default App;
