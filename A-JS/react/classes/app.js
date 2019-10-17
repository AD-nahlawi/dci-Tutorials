// ___app.js___

import _Users_ from './main.js';
import { Ahmad } from './main.js';
import { Mohammad } from './main.js';

class Omer extends _Users_{
    constructor( age ){
        super( age );

    this.fname = 'OMER';
    this.lname = 'HAZZEM';
    }
}
var omer = new Omer();
console.log(
    omer.fname+' '+
    omer.lname+' '+ 
    omer.calculate_age(1999)
);// OMER HAZZEM 20

var ahmad = new Ahmad();
console.log(
    ahmad.fname+' '+
    ahmad.lname+' '+
    ahmad.calculate_age(1995)
);// AHMAD NAJJAR 24

var mohammad = new Mohammad();
console.log(
    mohammad.fname+' '+
    mohammad.lname+' '+
    mohammad.calculate_age(1990)
);// MOHAMMAD YOUSEF 29

