import { firstPerson } from "./department";

export/*  default */ class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}



export let varName = 'my_variable';

/* export */ function print_name(person){
    console.log(` name is: ${person.name}`);
}

/* export */ function print_age(person){
    console.log(` age is: ${person.age}`);
}

export default Person ;
export{ print_name, print_age }






