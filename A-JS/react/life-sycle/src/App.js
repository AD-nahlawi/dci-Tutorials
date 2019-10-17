// Mounting
    // constructor()
    // getDerivedStateFromProps()
    // render()
    // componentDidMount()
//Updating
    // getDerivedStateFromProps()
    // shouldComponentUpdate()
    // render()
    // getSnapshotBeforeUpdate()
    // componentDidUpdate()
//Unmounting
    //componentWillUnmount()

import React,{Component} from 'react';
import './App.css';
import TitleHeader from './TitleHeader';
// import Clocks from './Clocks';
// import Ctime from './Ctime';

// let TimeZones = new Clocks;
// //console.log(TimeZones.state.countries);


export default class App extends Component {
constructor(props){
  super(props)

  this.state = {
        buttonName:'Show/Hide',
        show:true,
        value: 'Default Title',
        data: [
                { id:1 , title:'First Item' },
                { id:2 , title:'Second' },
                { id:3 , title:'Third' },
                { id:4 , title:'Fourth' },
                { id:5 , title:'Fifth ' },
              ]
  }

}
changeTitle =(title) => {
  this.setState( { value : title } );
}
ShowHide = () => {

  // this.setState( { show : !this.state.show } )

  this.setState( ( statePara ) => ( { show : !statePara.show } ) );

}

render() {

const list = this.state.data.map( ( item ) => {
return <li  key = { item.id }
            onClick = { () => this.changeTitle( item.title ) } 
       > 
          { item.title }
      </li>
})

// const citys = TimeZones.state.countries.map((item, index)=>{
//   return(
//     <li key = {index} >
//         <Ctime  id =        { index }
//                 time =      { this.state.time }
//                 timezone =  { item } 
//         />
//     </li>
//   )
// })


return (

<div className = "wrapper">

  {
    this.state.show ? 
    <TitleHeader newTitle = { this.state.value } /> : null
  }



  <ul className = "list">
      {list}
      {/* {citys} */}
  </ul>



  <button className='btn' 
         
          onClick = {() => this.ShowHide()}
  >
    {this.state.buttonName}
  </button>
</div>


)
}
}

