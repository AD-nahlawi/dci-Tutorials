//---------------------------------function to Search in Objects-----------------------------------------

let car1 = { name: "BMW", country:"Germany"}
let car2 = { name: "VW", country:"Barasil"}
let car3 = { name: "Nissan", country:"Africa"}
let car4 = { name: "Tesla", country:"Asia"}
let car5 = { name: "ford", country:"Turkey"}

let cars = [car1, car2, car3, car4, car5];

function FindCarCountry(nameParameter){
    let country;

    for (let i = 0; i < cars.length ; i++ ){

        if (cars[i].country == nameParameter){
            country = cars[i].name;
        }
    }
return country;
}


 let br = '<br>';
var person = {firstName:'John',lastName:'Snow',age:25,eyeColor:'blue',fullname:function(){return this.firstName + ' ' + this.lastName}};

 function printPersonProps(object){
 let i = 0;
 for(prob in object){
    // i++;
    document.write(prob +':' + object[prob] + br);
    }
}
printPersonProps(person);



let car1 = { name: "BMW", country:"Germany"}
let car2 = { name: "VW", country:"Barasil"}
let car3 = { name: "Nissan", country:"Africa"}
let car4 = { name: "Tesla", country:"Asia"}
let car5 = { name: "ford", country:"Turkey"}
let cars = [car1, car2, car3, car4, car5];

function FindCarCountry(nameParameter){
    let country;

    for (let i = 0; i < cars.length ; i++ ){

        if (cars[i].country == nameParameter){
            country = cars[i].name;
        }
    }
return country;
}

function checkCountrys(parameter){
    let carName; 
    for (let i =0; i < cars.length; i++){
        if (cars[i].country == parameter){
                carName = cars[i].name;
        }
    }
return carName;
}

if (parseInt(day) =  10 ){

    for (i = 0; i < 10; i++){
    let ifDays = {'sa':'so'};
    if (day < 7){
    }
    }
    }
    