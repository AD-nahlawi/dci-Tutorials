// let object = {name:'John',age:35,city:'Hamburg'};

// let json = JSON.stringify(object);

// console.log(json);

let studentObject = 
{
    studentsName:   [
                        {name:'mansour'},
                        {name:'ahmad'},
                        {name:'jamal'},
                    ],
    studentsLastName:[
                        {lastName:'tumeh'},
                        {lastName:'nahlawi'},
                        {lastName:'naser'}

                    ],
    studentAge:     [
                        {age:30},
                        {age:23},
                        {age:22}

                    ],
    studentWork:     [
                        {work:true},
                        {work:false},
                        {age:false}

                    ]
}

let ahmadInfo = 

studentObject.studentsName[1].name+ ' '+
studentObject.studentsLastName[1].lastName+' '+
studentObject.studentAge[1].age+' '+
studentObject.studentWork[1].work; 

console.log(JSON.stringify(ahmadInfo));
console.log(ahmadInfo);
