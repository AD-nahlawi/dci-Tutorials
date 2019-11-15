import React,{useState, useEffect} from 'react';
import './App.css';
import img0 from './imgs/0.jpg'
import img1 from './imgs/1.jpg'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'
import img4 from './imgs/4.jpg'
import img5 from './imgs/5.jpg'
import img6 from './imgs/6.jpg'

let style = {backgroundColor:'green',borderRadius:20 +'px',width:43 +'px',height:50 + 'px'}
const letters = ['a','b','c','b','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const photos = [ img0, img1, img2, img3, img4, img5, img6 ]

const gussWords = ['java','javascript','c','sql','csharp','assembly','swift']



function App() {
  
  const [letterValues, setLetterValues] = useState([])
  const [randmletterValues, SetRandmletterValues] = useState('')
  const [dashArray, setdashArray] = useState([])
  useEffect( ()=> {
    randomWordsFunction()
  },[] )
  
 

const randomWordsFunction = () => {

let randomWordsVar = ''
  randomWordsVar = Math.floor(Math.random() * gussWords.length)
  SetRandmletterValues(gussWords[randomWordsVar])

}
// let arr = []
const buttonValue = (e) => {
  setLetterValues(e.target.value);
   
//   arr.push(letterValues)
//   setdashArray(arr)
// console.log(dashArray)
}

let gussArray = randmletterValues.split('').map((words)=>{
  if (letterValues.includes(words)){
    return words
  }else{
    return '-'
  }
})

const buttons = letters.map((letter, index)=>{
  return  <input type = 'button' style = {style} key = {index} value = {letter} onClick = {(e)=> buttonValue(e)} />
})


return (
  
  <div className="App">
    <h1>Hang Man</h1><br/>
    <img src = {photos[1]}/>
    {/* <h3>{ letterValues == '' ? 'Start' : letterValues}</h3> */}
    {gussArray}<br/>
      {buttons}
     
  </div>
)


}

export default App;
