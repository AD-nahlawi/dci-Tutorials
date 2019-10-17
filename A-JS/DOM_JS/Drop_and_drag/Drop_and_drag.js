// let main = document.getElementById("main");
// let destination = document.querySelectorAll(".destination");


// for (let i = 0; i < destination.length; i++) {
//         destination[i].addEventListener("dragover", function over(e) {
//             e.preventDefault();
//             console.log("Drag is Overed");
//         });

//         destination[i].addEventListener("dragenter", function enter(e) {
//             e.preventDefault();
//             console.log("Drag is Entered");
//         });

//         destination[i].addEventListener("dragleave", function leave(e) {
//             e.preventDefault();
//             console.log("Drag is Leaved");
//         });

//         destination[i].addEventListener("drop", function drop(e) {
//             e.preventDefault();
//             this.append(main);
//             console.log("Dropped !");
//         });
//         console.log(destination[i]);
// };







function allowDrop(ev) {
  ev.preventDefault();
  console.log('allowDrop()');
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
    console.log('drag()');
}

function drop(ev) {
//   ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
    console.log('drop()');
    ev.style.background = 'red';
}