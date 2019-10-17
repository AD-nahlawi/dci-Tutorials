let ul = document.getElementById('ul');



let filterIn = document.getElementById('filter');
filterIn.addEventListener('keyup',filterItems);
let liAll = document.getElementsByTagName('li');

function filterItems(element){

    for(let i = 0; i < liAll.length;i++){

         if(liAll[i].textContent.toLowerCase().indexOf(element.target.value.toLowerCase()) != -1){

            liAll[i].style.display = 'block';
            console.log('found');

         }else{

            liAll[i].style.display = 'none';
            console.log('not found');

         }
    }


}


