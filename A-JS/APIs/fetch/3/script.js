

/* document.getElementById('button').addEventListener('click',function(){

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then( (data) => {
            return data.json();
        })
        .then( (data) => {
            let output = '<h3>Users </h3>';
            data.forEach(element => {
                output += 
                    `
                        <ul>
                        <li>${element.id}</li>
                        <li>${element.name}</li>
                        <hr>
                        </ul>
                    `;
            });
        console.log(output);
        })
})
 */

async function _get_all_users(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}

// _get_all_users().then(function(users){
//     console.log(users)
// });







let addPost = document.querySelector('#addPost');
addPost.addEventListener('submit',createPost);


function createPost(e){

    e.preventDefault();
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{

        method  : 'POST',
        headers : {
            'Accept':'application/json , text/plain , */*',
            'Content-type':'application/json'
        },
        body : JSON.stringify({title:title,body:body})

    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })

}



// function jqueryJokes(e) {    e.preventDefault();
//     let number = $("#number").val();    let url = `http://api.icndxftghdfb.com/jokes/random/${number}`;    $.get(url,function(data,status){
//         let output = '';
//         if(status === "success"){
//             data.value.forEach(function(item){
//                 output += <li>${item.joke}</li>;            })
//             $(".jokes").html(output);        }    })}
/* 

try {
    const data = await postData('http://example.com/answer', { answer: 42 });
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } */