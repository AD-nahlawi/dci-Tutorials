import Persons from './main.js';


class Student extends Persons{
    constructor(name,job,age){
        super(name,job,age);
    }

}

let person2=new Student("Romal","Java-Dev");
console.log(person2.name);
console.log(person2.job);

person2.calc_age(1990);
console.log(person2.age)

 





