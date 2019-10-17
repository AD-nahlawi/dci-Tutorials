// // indexedDB, localStorage, sessionStorage
// let DB_name = document.querySelector('#txtBD'); 
// let DB_Version = document.querySelector('#txtVersion');

// let div = document.querySelector('#div');
// let empty_Data_Base = null;
// let create_DB_button = document.querySelector('#create_DB_button');
//     create_DB_button.addEventListener('click',createDB);
// let add_note_button = document.querySelector('#add_note_button'); 
//     add_note_button.addEventListener('click',add_to_dataBase)






// function createDB(){

 
    
//     let DBOpenRequest = indexedDB.open(DB_name.value, DB_Version.value);

//     DBOpenRequest.onupgradeneeded = function(event){  // onupgradeneeded, onblocked, onerror, onsuccess

//         alert(`Upgraded DB = ${db_name} \n with version = ${db_Version}`);
//         empty_DataBase = event.target.result;

//         let private_Note = empty_DataBase.createObjectStore('Personal_notes',{keyPath: "title"});
//         // let todo_list = empty_DataBase.createObjectStore('Todo_list');

//     }

//     DBOpenRequest.onsuccess = function(event){

//         div.innerHTML = `Successed DB = ${db_name} <br> with version = ${db_Version}`;
//         empty_DataBase = event.target.result;

//     }

//     DBOpenRequest.onerror = function(event){

//         empty_DataBase = event.target.result;
//         div.innerHTML = `Error! <br> ${event.target.error}`;

//     }
// }





// function add_to_dataBase(){

//     let note = {

//         title: 'appoitment' + Math.random(),
//         text: 'today appoitment'

//     }

//     let db_note = empty_Data_Base.transaction('Personal_notes','readwrite');

//         db_note.onerror = function(event){

//             alert ('error: ' + event.target.error);

            

//         }
//     let personal_notes = db_note.objectStore('Personal_notes');

//     personal_notes.add(note);
        

// }








// indexedDB, localStorage, sessionStorage
let DB_name = document.querySelector('#txtBD'); 
let DB_Version = document.querySelector('#txtVersion');

let div = document.querySelector('#div');
let empty_Data_Base = null;
let create_DB_button = document.querySelector('#create_DB_button');
    create_DB_button.addEventListener('click',createDB);



let add_note_button = document.querySelector('#add_note_button'); 
    add_note_button.addEventListener('click',add_to_dataBase);


function createDB(){

 
    
let DBOpenRequest = indexedDB.open(DB_name.value, DB_Version.value);

    DBOpenRequest.onupgradeneeded = function(event){  // onupgradeneeded, onblocked, onerror, onsuccess

        alert(`Upgraded DB = ${DB_name} \n with version = ${DB_Version}`);
        empty_DataBase = event.target.result;

        let private_Note = empty_DataBase.createObjectStore('Personal_notes',{keyPath: "title"});
        // let todo_list = empty_DataBase.createObjectStore('Todo_list');

    }

    DBOpenRequest.onsuccess = function(event){

        div.innerHTML = `Successed DB = ${DB_name} <br> with version = ${DB_Version}`;
        empty_DataBase = event.target.result;

    }

    DBOpenRequest.onerror = function(event){

        empty_DataBase = event.target.result;
        div.innerHTML = `Error! <br> ${event.target.error}`;

    }
}

 



function add_to_dataBase(){

    let note = {

        title: 'appoitment' + Math.random(),
        text: 'today appoitment'

    }

    let db_note = empty_Data_Base.transaction('Personal_notes','readwrite');
        db_note.onerror = function(event){

            alert ('error: ' + event.target.error);

        }

    let personal_notes = db_note.objectStore('Personal_notes');

    personal_notes.add(note);
        
}




