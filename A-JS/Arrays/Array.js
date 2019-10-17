
// --------------------------------Array functions if and while--------------------DrinkList function
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

// let drinkList = ["water","cofe","tea","milk","cola","beer","123"];

// function delDrink_addDrink(delFormArr,addToArr){

//     document.write('the arr before the chanes is:' +br+ drinkList+br+br);

//     if(typeof(addToArr) !== ""){
//         drinkList.push(addToArr);
//         document.write('the arr after the chanes will:' +br+ drinkList+br+br);

//     }

//     let counter = -1;
//     while(counter < drinkList.length -1){
//     counter ++;

//         if (drinkList[counter] == delFormArr ){
//             continue;
//         }

//     document.write(drinkList[counter]+br);
//     }   
//     document.write(br);
// }

 //--------------------------------------------------------------------- course time function
// let time;
// function check_time(time){

//     if(time ==  9.00){document.write('<h1>We Start!</h1>');}
//     else if (time == 12.00){document.write('<h1>Lounch breack</h1>');}
//     else if(time == 16.15){document.write('<h1>we Done</h1>');}
//     else{document.write('<h1>programming time</h1>');}

// }

 // --------------------------------------------------Search in Arrays Problem:--------------------------
//   let newCars = ["bmw","ford","ferari"];

//      function findYourCar(car){
//          for(i =0; i < newCars.length ;i++){
//              if(newCars[i] == car){
//                  console.log("Your car is found!");
//              }
//              else{
//                  console.log("Your car is not found!");
//              }
//          }

//      } 
  // -----------------------------------------------------Search in Arrays Soulution: --------------------

//     let newCars = ["bmw","ford","ferari"];

//     function findYourCar(car){
//         let found = false;
         // let carVar;
//         for(i = 0; i < newCars.length; i++){
//             if(newCars[i] == car){
//                 found = true;
//             }
//         }

//         if (found){
//             console.log("Your car is found!");
//         }
//         else{
//             console.log("Your car is not found!");
//         }
//     } 

 // -----------------------------------function checkCountrys---------------

//     function checkCountrys(parameter){
//       let carName; 
//       for (let i =0; i < cars.length; i++){
//           if (cars[i].country == parameter){
//                   carName = cars[i].name;
//           }
//       }
//   return carName;
//   }


 // --------------------------------Array Loops--------------------------------
 // ---------------------------------------------------------------------------
 // ---------------------------------------------------------------------------
 // ---------------------------------------------------------------------------
 // ---------------------------------------------------------------------------

 // -----------------------for------------------Cars
// let cars=["Subaru","Dodge","BMW","Nissan"]; 
// for(let i=1; i <= cars.length;i++){
//     document.write(cars[0]);
// }

 // ------------------------forEach to array---------------SeaFood
// let seafood=["fish","shrimps","calmary"];
// seafood.forEach(
//   function(sf){console.log(sf)}
//   )
 // -------------------------------------------------------WeekDays
// let weekdays=["mo","te","we","th","fri","sa","sun"];
// weekdays.forEach(printdays);//----------------------??????

// function printdays(day,index){
//     document.write(day +" "+ index);
// } 
 // -----------------------------------------------------Numbers
// let numbers = [1, 4, 6, 7, 8, 9];
// numbers.forEach(printNumbers);
// function printNumbers(num1, num2){
//     document.write(num1 +" "+ num2);
// }
 // -----------------------------------------------------Food
// let food = new Array("Pizza","Kebab","Doner","Falafel","Salat","");
// let foodLength= food.length;

// for (let counter = 0 ; counter < foodLength ; counter ++ ){
    
//     document.write(food[counter] + br);
// }
 // -----------------------------------------------------Colors for HTML Elements

// let colorArray = ["red","blue","green","green","blue","red"];
 //let array                            #
 
 
// nt.write(div);
 // }  
 // --------------------------------------------------adding 10+20+30+40+50+60 and Dividing the Sum with 6

// let student =[10,20,30,40,50,60] ;  // array = 6 values
// let arrayLength = student.length ;  // create a variable to counting how much value have the Array
// let sum = 0; // to start a sum variable from 0

// for( let counterLoop = 0; counterLoop < arrayLength; counterLoop++ ){

//     sum = sum + student[ counterLoop ]; // add the array with there values to the sum variable

// }
// document.write(sum / student.length); //to Dividing the sum with 6




// ----------------------------------------------Array 'Attributes'-------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// ---------------------------push--------------------------
// let array =["Orange","Pink","Green"];
// array.push("blue");
// ----------------------------------------------------


// -------------------------------------------------------pop----------------------------
// array.pop();
// -----------------------------------------------------


// --------------------------------------------------------shift----unshift------------------------
//shift is used to remove an Element at the beginning of the array
// array=["Apple","Mango","Banana"];
// array.shift();
// unshift is used to add elements to the beginning of the array.
// array.unshift("ananas","blueberries","Avocado","Orange");
// -----------------------------------------------------


// -------------------------------------------------------search-indexOf--lastIndexOf-----------------------
// let mystr = "my name is ahmad";
// mystr.search("ah");      //to search anyway and return the index
// console.log(mystr.search('ah'));

// array.indexOf('arrayElementNumber')
// document.write(array.indexOf("ananas") );
// mystr.indexOf("ah");     //to search at the beginning
// mystr.lastIndexOf("ah"); //to search form the last

// while(array.indexOf('yes') == -1){
// }

// --------------------------------------------------------slice------------------------------
// SLICE to extract any Elements from the array.
// array.slice(1,2);              //slice(?????)     

// ---------------------------------------------------splice------------------------------
//Example of inserting at beginning 
// var array = [111, 222, 333];
// array.splice(0, 0, xxx);
// Array is now [xxx, 111, 222, 333]

//Inserting at arbitrary index 
// var array = [111, 222, 333];
// array.splice(2, 0, xxx);
// Array is now [111, 222, xxx, 333]

//Adding element to end of array 
// var array = [111, 222, 333];
// array.push(xxx);
//  Array is now [111, 222, 333, xxx]

// ----------------------------------------------------includes--------------------------------
// var array = ['ahmad', 'al', 'nahlawi'];

// console.log(array.includes('nahlawn'));
// expected output: true
// -------------------------------------------, substring, substr, ---------


// mystr.substring(3,10);  //(indexStart, indexStop)
// mystr.substr(2,1);      //(index, length)


// alert(check_time(9.00));
// let mystr = "my 'nyme' is 'ahmad'";
// let mystr = 'my nyme is \'ahmad\'';
// let mystr = 'my nyme is \'ahmad\'';
//  let mystr = "my nyme is \n'ahmad'";
// alert (mystr)









// -----------------------------------------------------
// -----------------------------------------------------

    // let foood = ['banana','apple','mango'];

    // function check(varName){

    //     return varName =='mango';
    // }

    // console.log(foood.find(check));



    // let person = [
    //     {name:'Anna',work:'doctor'},
    //     {name:'David',work:'web developer'},
    //     {name:'Mansour',work:'web developer'}
    //     ]

    // function isWebDevoloper(employee){
    //     return  employee.work == 'web developer';
    // }

    // console.log(person.find(isWebDevoloper).name);
    // console.log(person.findIndex(isWebDevoloper));


    // person.reverse();  console.log('after reverse() ---' + person);

    // console.log('the web Dele. is ---'+person.find(isWebDevoloper).name);
    
    // console.log('index of web Dele. is ---'+person.findIndex(isWebDevoloper));


    // console.log(person.filter(isWebDevoloper));


    // let age = [15,18,30,55,60,13,22,75,100];
    // function canDrive(driverAge){
    //     return (driverAge >= 18 && driverAge <= 75);
    // }


//     console.log(age.filter(canDrive));

//     let dirvers = age.filter(canDrive);
//     console.log('Sortered --------'+dirvers.sort()+'-----');



// let cities = [
//     {city:'Hamburg'   ,population:1000000},
//     {city:'Berlin'    ,population:2000000},
//     {city:'stuttgart' ,population:7000000}
// ]


//     function sumOfPupulation(total,number){
//         return 
//     }

//     console.log(cities.reduce(sumOfPupulation)); 



//     var pokemon = ["squirtle", "charmander", "bulbasaur"];
//     var pokeLength = pokemon.reduce(function(previous, current) {return previous + current.length;}, 0);
 
        // 27
// -----------------------------------------------------
// -----------------------------------------------------














// import RPi.GPIO as GPIO
// import time

// servoPIN = 18
// servoPIN2 = 23
// GPIO.setmode(GPIO.BCM)
// GPIO.setup(servoPIN, GPIO.OUT)
// GPIO.setup(servoPIN2, GPIO.OUT)

// p = GPIO.PWM(servoPIN, 50) // GPIO 18 for PWM with 50Hz
// q = GPIO.PWM(servoPIN2, 50) // GPIO 23 for PWM with 50Hz
// p.start(2.5) // Initialization
// q.start(2.5)
// try:
//   while True:

//     p.ChangeDutyCycle(5)
//     q.ChangeDutyCycle(5)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(7.5)
//     q.ChangeDutyCycle(7.5)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(10)
//     q.ChangeDutyCycle(10)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(12.5)
//     q.ChangeDutyCycle(12.5)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(10)
//     q.ChangeDutyCycle(10)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(7.5)
//     q.ChangeDutyCycle(7.5)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(5)
//     q.ChangeDutyCycle(5)
//     time.sleep(0.5)
//     p.ChangeDutyCycle(2.5)
//     q.ChangeDutyCycle(2.5)
//     time.sleep(0.5)


// except KeyboardInterrupt:
//   p.stop()
//   q.stop()
//   GPIO.cleanup()


