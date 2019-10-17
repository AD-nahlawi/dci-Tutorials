let li = document.querySelectorAll('li');
let section = document.querySelectorAll('section');

// li[0].addEventListener('click',function(){
//     section[0].classList = 'active';
//     section[1].classList = '';
//     section[2].classList = '';
//     section[3].classList = '';
//     section[4].classList = '';
// });
// li[1].addEventListener('click',function(){
//     section[0].classList = '';
//     section[1].classList = 'active';
//     section[2].classList = '';
//     section[3].classList = '';
//     section[4].classList = '';
// });
// li[2].addEventListener('click',function(){
//     section[0].classList = '';
//     section[1].classList = '';
//     section[2].classList = 'active';
//     section[3].classList = '';
//     section[4].classList = '';
// });
// li[3].addEventListener('click',function(){
//     section[0].classList = '';
//     section[1].classList = '';
//     section[2].classList = '';
//     section[3].classList = 'active';
//     section[4].classList = '';
// });
// li[4].addEventListener('click',function(){
//     section[0].classList = '';
//     section[1].classList = '';
//     section[2].classList = '';
//     section[3].classList = '';
//     section[4].classList = 'active';
// });
function removeAllClasses(){
    for(let x = 0; x < li.length; x++){
        // to remove all classes
        section[x].className = '';
        // to remove all classes
        li[x].className = '';

    }
}
// for(let i = 0; i < li.length;i++){
//     li[i].addEventListener('click',function(){
//         removeAllClasses();
//         // to adding a class Active
//         section[i].className = 'active';
//         // to adding a class selected
//         li[i].className = 'selected';
//     });
// }

li.forEach(function(i){
    i.addEventListener('click',function(){
        removeAllClasses();
        // to adding a class Active
        i.className = 'active';
        // to adding a class selected
       i.className = 'selected';
    });   
})