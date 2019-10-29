import React , {Component} from 'react';
import User from './User'
export default class SearchResult extends Component{
constructor(props) {
    super(props)

this.state = {
    users:[
        { id:1, fname:'ahmad', lname:'alnahlawi', email:'ahmad@gmail.com' },
        { id:2, fname:'Kyra', lname:'Johnson', email:'mohammad@gmail.com' },
        { id:3, fname:'wisam', lname:'WM', email:'wisam@gmail.com' },
        { id:4, fname:' Mike', lname:'Johnson', email:'farhan@gmail.com' },
        { id:5, fname:'peter', lname:'uduevborho', email:'peter@gmail.com' }
    ]
}

}


lastSearchFor = '';
shouldComponentUpdate(nextProps/* , nextState */) {
    console.log('nextProps= ',nextProps)
    if( nextProps.searchFor === this.lastSearchFor ){
        return false;
    }else{
        this.lastSearchFor = nextProps.searchFor;
        return true;
    }
}


render(){

    let filteredArray = this.state.users.filter((item)=>{
        return item.fname.includes( this.props.searchFor)
    })

    let myResults = filteredArray.map((item, index)=>{
        return <User key = {index} id = {item.id} fname = {item.fname} lname = {item.lname} email = {item.email} />
    })

    return(
        
        <table className=" SearchResult ">
        <thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

        {myResults}

        </tbody>
        </table>
        
    )

}
}

export function SearchInput( props ) {
    return (
        <form >
            <input onChange = { props.onChange } />
        </form>
    )
  }

  export function SearchButton( props ) {
    return (
            <button onClick = { props.onClick } > Search </button>
    )
  }