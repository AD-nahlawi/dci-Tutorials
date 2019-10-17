import React, { Component } from 'react'
import InputField from './Components/Input_Field';
import Images from './Components/Images';
import './App.css';
export default class App extends Component {
constructor(props) {
      super(props)

  this.state = {
      root:'https://pixabay.com/api/',
      key:'13971373-b21e06d51d07acc1c97705551',
      query:'',
      url:'',
      letSearch:false,
      loadedImages: null
  }
}


saveQuery = ( e ) => {
     this.setState( { query: e.target.value , /* letSearch:false */ } )  
    console.log('the query value = ' + e.target.value)
}

searchImages = () => {

      let words =  this.state.query.split(' ');
      let newUrl = this.state.root + '?key=' + this.state.key +'&per_page=50'+ '&q=';

      words.forEach(( word ) => {
        newUrl += word + '+'
        console.log( newUrl);
      });

      this.setState({url:newUrl, letSearch:true, loadedImages:null } )
}

loadImage = () => {

  let newImages = <Images url = {this.state.url}/>

  this.setState({
    loadedImages:newImages,
    letSearch:false
  })
}

  render() {

      if(this.state.letSearch){
          this.loadImage()
      }

    return (
   
      <div>
           <InputField change = {(e)=> this.saveQuery(e) } click = {()=> this.searchImages()  }/>
           {this.state.loadedImages}
      </div>
    )
  }
}
