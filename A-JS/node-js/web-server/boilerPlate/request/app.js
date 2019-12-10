var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.get('/about',(req, res)=>{
    res.send('hi from about');
})
 

// app.get('/userid',(req, res)=>{
//    res.send(req.params.userid)
// })
 

// add to query Object from the Url After ?  // ex: http://127.0.0.1:3000/search?name=Ahmad&email=email.com
app.get('/search',(req, res)=>{
    res.send(req.query);
})
 

app.get('/weather', (req, res) => {

    console.log(req.method)     // "GET"
    console.log(req.protocol)     // "https"
    console.log(req.hostname)     // "hamburg-coders.pro"
    console.log(req.path)         // "/weather"
    console.log(req.originalUrl)  // "/weather?filter=very-cold"
    console.log(req.subdomains)    // "['node']"
})

   



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
