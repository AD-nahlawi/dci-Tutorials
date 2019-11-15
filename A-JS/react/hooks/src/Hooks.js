import  React, {useState, useEffect} from 'react'
import './App.css'


function Photos() {


const [posts, setPosts] = useState([]);
const [users, setUsers] = useState([]);

async function fetchingPosts(){
        const response = await fetch( 'https://jsonplaceholder.typicode.com/posts' )
        response.json()
        .then( posts => {
            setPosts( posts )
        })
}
async function fetchingUsers(){
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users' )
    response.json()
    .then( users => {
        setUsers( users )
    })
}

useEffect(() => {
    fetchingPosts();
    fetchingUsers();
},[])


// let usersNanes = users.map((item)=>{  
//     return item.name
// })


    
let Cards =  posts.map(( post ) => {
    
    let usersNanes2 = users.map(( user )=>{
        if (user.id  == post.userId){
        return user.name
        }
    }) 

    return ( 
        <div className="card" key = {post.id}>{post.userId}
            <h2>{post.title}</h2>
            <div className="container">
                <p>{post.body}</p> 
                {/* <h5>By: {usersNanes[post.userId -1 ]}</h5> */}
                <h5>By: {usersNanes2}</h5>
            </div>
        </div>
    )   
})





return(

    <div className = 'App'>
        { Cards }
    </div>
)


}


export {Photos}