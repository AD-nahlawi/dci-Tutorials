  
let randomValue = Math.floor(Math.random() * 10);
let input = document.querySelectorAll('.inputNumber');
    input[0].value = randomValue;
    input[1].value = randomValue + 3;
    input[2].value = randomValue + 4;  


function fetchingData(){
    document.getElementById('bodyTable').innerHTML = ''

    fetch('/myapi/' + input[0].value)
      .then(( json ) => { return json.json() })
      .then(( data ) => {
        
        let jsonData = data.map(( item )=>{
  
            return ` <tr>
                        <td>${item.id}</td>
                        <td>${item.username}</td>
                        <td>${item.email}</td>
                        <td>${item.street}</td>
                      </tr>`
        })
  
       document.getElementById('bodyTable').innerHTML = jsonData
  
    })
}
  
function Clear(){
    location.reload(true)
}
   
  
   
  
  
    // document.getElementById('id').innerHTML = data ;
    // document.getElementById('UserName').innerHTML = data ;
    // document.getElementById('email').innerHTML = data ;
    // document.getElementById('street').innerHTML = data ;
  


/* function obtain_data(){   

    fetch('/api')
    .then(response =>{
        return response.json()
    }).then (data =>{
      console.log(data);
      create_table(data);
    })
}
function create_table(data){

    let dataCount = data.length;
    let thead_content='';
    let tbody_content='';
    let thead = document.getElementById('thead')
    let tbody = document.getElementById('tbody')

    for(var prop in data[0]){
        thead_content += `<th>${prop}</th>`
    }

    thead.innerHTML = thead_content;

    for (let index = 0; index < dataCount; index++) {
        tbody_content += '<tr>'
    Object.values(data[index]).forEach(element => {
        tbody_content += `<td>${element}</td>`
    });
    tbody_content += '</tr>'
    }
    tbody.innerHTML = tbody_content;

}
obtain_data() */