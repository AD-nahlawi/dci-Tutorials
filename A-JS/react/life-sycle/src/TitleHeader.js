import React, { Component } from 'react';


export default class TitleHeader extends Component {

// Mounting
constructor(props){
    super(props)
    
    this.state = {
        title:''
    }
}
// Mounting //Updating
static getDerivedStateFromProps( props, state ){

    console.log('get Derived State From Props');
    // console.log('new props', props.newTitle);
    // console.log(state.title);

    if( state.title !== props.newTitle ){

        return { title: props.newTitle }

    }else{

        return null

    }
}

// Mounting
componentDidMount(){
        console.log('component Did Mount')
         // console.log(this.state.title);
        let header = document.querySelector('h1');
            header.style.textAlign = 'center';
            header.style.color = 'red';
}
// Updating
shouldComponentUpdate(){
    console.log('should Component Update');
    return true;
}
// Updating
componentDidUpdate(){
    console.log('component Did Updated');
    let header = document.querySelector('h1').style.background = 'pink';
}
// Unmounting
componentWillUnmount(){
    console.log(' component Will Unmount ');
}
  
// Mounting //Updating
render() {
    console.log('render')
    return (
        <div>
            <h1>{this.state.title}</h1>
        </div>
    )
}




}
