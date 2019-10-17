class Persons{
    constructor(name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
    }
    //we will add a function to calculate the age,minuse 2019 from your born date 
    calc_age=(year) =>{
        this.age=2019-year;
    }
}


let person1=new Persons;

person1.name="Wissam";
person1.job="Web-Developer";
console.log(person1.name);
console.log(person1.job);

person1.calc_age(1992);
console.log(person1.age)



export default  Persons;
