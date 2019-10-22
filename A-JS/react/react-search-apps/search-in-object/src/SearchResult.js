import React,{Component} from 'react';

export default class SearchResult extends Component{
constructor(props) {
    super(props)

this.state = [
    { id:1, fname:'ahmad', lname:'alnahlawi', email:'ahmad@gmail.com' },
    { id:2, fname:'mohammad', lname:'hazem', email:'mohammad@gmail.com' },
    { id:3, fname:'wisam', lname:'WM', email:'wisam@gmail.com' },
    { id:4, fname:'farhan', lname:'Allafi', email:'farhan@gmail.com' },
    { id:5, fname:'peter', lname:'uduevborho', email:'peter@gmail.com' },
  ]
}

// static getDerivedStateFromProps(props,state){
// }

    render(){
        // const createRows = this.state.map((item, index)=>{
            return(
               
                    <tr >
                        <td>{this.state[0].id}</td>
                        <td>{this.state[0].fname}</td>
                        <td>{this.state[0].lname}</td>
                        <td>{this.state[0].email}</td>
                    </tr>
               
            )
        // });
        // return ( 
        //     )
    }
}
    

