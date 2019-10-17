import './style/main.scss';
var moment = require('moment');
let main = document.getElementById('main');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

class Moments{
    constructor(enddate) {
         this.enddate = enddate
    }
    gerDate(){

    }
}


//-----------------  Format Dates  --------------
// moment().format('MMMM Do YYYY, h:mm:ss a'); // September 19th 2019, 3:14:10 pm
// moment().format('dddd');                    // Thursday
// moment().format("MMM Do YY");               // Sep 19th 19
// moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
// moment().format();                          // 2019-09-19T15:14:10+02:00



 console.log(moment("20190919", "YYYYMMDD").fromNow()); // 8 years ago
 console.log(moment("20190620", "YYYYMMDD").fromNow()); // 7 years ago

//console.log(moment().startOf('hour').fromNow());        // 16 hours ago
//console.log(moment().endOf('minutes').fromNow());          // in 8 hours
