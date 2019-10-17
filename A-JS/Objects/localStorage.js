    
// let setObj = document.getElementById('setObj');
// let nameIn = document.getElementById('name');
// let ageIn =  document.getElementById('age');
// let jobIn =  document.getElementById('job');
// let cityIn = document.getElementById('city');
// let save = document.getElementById('save');

// save.addEventListener('click',function(){
// let personObj = {};
//     personObj.name  = nameIn.value; 
//     personObj.age   = ageIn.value;             
//     personObj.job   = jobIn.value;      
//     personObj.city  = cityIn.value;

//     let personArr = [];
//     let strObj =  JSON.stringify(personObj);
    
//     personArr.push(strObj);
//     localStorage.setItem(setObj.value,personArr);
//     console.log(personArr);

// });
//--------------------------------------------------------------------------------------------

{/*
    
<form action="" id="task-form">
<input type="text" name="task" id="task">
<label for="task">New task</label> 
</input><input type="submit" value="Add task"></input>
<div id="task-list" class="card card-body text-center mt-5">

 */}





let form = document.querySelector('#task-form');
let taskInput = document.querySelector('#task');
let taskList = document.querySelector('#task-list');
loadEventListener();
function loadEventListener(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTast)
};                  
function addTask(e){
    if(taskInput.value != ''){
        e.preventDefault();
        createElements(taskInput.value);
        storeToLocalStorge(taskInput.value);
        // removeButton.addEventListener('click',function(){
        //     this.remove();
        //     h5.remove();
        //     // if(e.target.classList.contains('delete')){
        //     //     console.log('XXX')
        //     // }
        // });
    }
    else{
        alert('please add a task!');
    }
}
function removeTast(e){
    if(e.target.classList.contains('delete')){
        console.log('removeTast() runned');
        e.target.parentElement.remove();
        remove_From_localstorge(e.target.firstChild.parentElement)
    }
};
function storeToLocalStorge(task){
    let localStorageArray;
    if(localStorage.getItem('myKey') === null){
        localStorageArray=[];
    }else{
        localStorageArray = JSON.parse(localStorage.getItem('myKey'));
        localStorageArray.forEach(function(storedTasks){
            createElements(storedTasks);
        });
    };
        localStorageArray.push(task);
    localStorage.setItem('myKey',JSON.stringify(localStorageArray));
};
function createElements(text){
    let h5 = document.createElement('h5');
    let taskText = document.createTextNode(text);
    h5.appendChild(taskText);
    taskList.appendChild(h5);

    let removeButton = document.createElement('button');
    removeButton.innerText = 'X';
    removeButton.classList = 'delete btn btn-danger';
    h5.appendChild(removeButton);
}
function remove_From_localstorge(taskItem){
    let tasks;
    if(localStorage.getItem('myKey') === null){
        tasks= [];
    }else{
        tasks = JSON.parse(localStorage.getItem('myKey'));
    };
    tasks.forEach(function(task, index){
        if(taskItem.firstChild.textContent === task){
            tasks.splice(index, 1);
        };
    });
    localStorage.setItem('myKey',JSON.stringify(tasks));
}