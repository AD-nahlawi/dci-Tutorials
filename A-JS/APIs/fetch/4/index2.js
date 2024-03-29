
// create database in indexedDB

let db = null;

const btnCreateDb = document.getElementById("createDB");

const dbInput = document.getElementById("txtDB") ;

btnCreateDb.addEventListener("click",createDB);

​

const addBtn = document.getElementById("add");

addBtn.addEventListener("click",addNote);

​

function addNote(){

   

    const note = {

                title: "appointment" + Math.random(),

                 text: "i have today appoitment"

            }

    //permission

    const dbNote = db.transaction("personal_notes","readwrite");

    dbNote.onerror = function(e){

        alert(` error : ${e.target.error}`);       

       

    }

    const privateNotes = dbNote.objectStore("personal_notes");

    privateNotes.add(note);

    // add note object to the database    

}

​

​

​

​

function createDB(){

    const dbName = dbInput.value;

    

    const dbVersion = document.getElementById("txtVersion").value;

​

    const request = indexedDB.open(dbName,dbVersion);

    // on upgrade needed

    request.onupgradeneeded = function(e){

        db = e.target.result;

        alert(`upgrade is called the DB name : ${db.name}  with version : ${db.version}`);

       

        console.log(db);

        const privateNotes =  db.createObjectStore("personal_notes",{keyPath: "title"});

        const todoNotes = db.createObjectStore("todo-notes",{keyPath: "title"});

​

    }

    // on success

    request.onsuccess = function(e){

        db = e.target.result;

        alert(`success is called the DB name : ${db.name}  with version : ${db.version}`);

        

​

    }

    // on error

    request.onerror =function(e){

        db = e.target.result;

        alert(` error :  ${e.target.error} is found`);

​

    }

​

​

}

​

​