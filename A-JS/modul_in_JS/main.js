
/* import Person,{ varName,print_name as print_user_name , print_age as print_user_age } from './person.js';*/
// import Person from './person.js';
// import {print_name} from './person.js';
// import {print_age} from './person.js';

// let person_1 = new Person('Name',25);

/* print_user_name(person_1);
print_user_age(person_1); */


// import * as p from './person.js';


// let person_2 = new p.default('ahmad',33);
// // console.log(person_2);
// p.print_name(person_2);
// p.print_age(person_2);

// let obj = {
//         name:'ali',
//         age: 20,
// }
// p.print_name(obj);
// p.print_age(obj);

// console.log(p.varName);


import * as depObj from './department.js';

// console.log(depObj.department);

// depObj.id(depObj.room);
// depObj.fname(depObj.room);
// depObj.sname(depObj.room);
// depObj.age(depObj.room);
// depObj.live(depObj.room);


for(let i = 0;i < depObj.room.length;i++ ){
    console.log(depObj.room[i]);
}