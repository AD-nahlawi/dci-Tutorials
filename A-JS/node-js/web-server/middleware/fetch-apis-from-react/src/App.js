import React from 'react';
import './App.css'
export default class App extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  
  getPosts = () =>{
    fetch('http://127.0.0.1:5000/allPosts/')
    .then(jsonData => {
      return jsonData.json()})
    .then(data => {
        console.log(data)
        
        this.setState({posts: data})
    })
  }


  render() {
const data = this.state.posts.map((items,index) => {
  return(
   <div key = {index} >
        <h1>id:     {items.id} </h1>
        <h4>Name:   {items.name} </h4>
        <h5>Email:  {items.email} </h5>
        <h6>body:   {items.body} </h6>
   </div>
  )
})

    return (
      <div className = "App">
        <button onClick= {()=> this.getPosts()}>Click</button>
        {data}
      </div>
    )
  }
}

