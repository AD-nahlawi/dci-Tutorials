// let items = document.getElementsByClassName("list-group-item");

 // console.log(items);    


// items[3].textContent="this is the last item";


// let input = document.querySelector('input[ type = "submit" ]');

// input.style.color = 'blue';
// let item = document.querySelector('.list-group-item');

// let lastitem = document.querySelector('.list-group-item:nth-child(2)');
// lastitem.innerHTML = 'changed';


// var color = window.getComputedStyle(document.querySelector('li'), ':hover').getPropertyValue('color');
 // console.log(color)


// let odd = document.querySelectorAll("li:nth-child(odd)");
 // console.log(odd);


// let even = document.querySelectorAll("li:nth-child(even)");
 // console.log(even);


// for(let i = 0; i < odd.length; i++){
//     odd[i].style.background = 'red';
//     odd[i].innerHTML = 'Odd';

//     even[i].style.background = 'blue';
//     even[i].innerHTML = 'Even';
// };

console.log(document.documentElement.parentNode);
// console.log(parent.parentElement.parentElement.parentElement.parentElement);

// console.log(document.referrer)

let containerDiv1 = document.querySelectorAll('.container')[1];
let mainDiv = document.querySelector('#main');


let newDiv = document.createElement('div'); newDiv.innerHTML = 'New';
containerDiv1.insertBefore(newDiv, mainDiv);




let parentUl = document.querySelector('#ul');
let childrensLi = document.querySelectorAll('.list-group-item');
let newLi = document.createElement('li');
newLi.textContent = 'Item';
newLi.className = 'list-group-item';
parentUl.insertBefore(newLi, childrensLi[2])


let outputDiv = document.createElement('div');
outputDiv.className = 'title';
outputDiv.style.border = '2px solid black';
outputDiv.style.width = '100%';
outputDiv.style.height = 200 + 'px';
// outputDiv.style.
containerDiv1.appendChild(outputDiv)



let click = document.createElement('button');
outputDiv.appendChild(click);
click.innerHTML = 'Click';
click.style.width = '100%';
click.classList = 'btn btn-dark';


click.addEventListener('click',clickFunc);


function clickFunc(element){
    console.log(element.target.parentElement);
    console.log(element.target);

    // console.log(e.target.classList);
    // console.log(e.type);

}





