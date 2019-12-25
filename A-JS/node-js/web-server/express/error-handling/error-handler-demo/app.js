var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/errorHandling');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/errorHandling', usersRouter);

// custum 404 page
app.get('*', function(req, res, next){
 //  let err = new Error('Woops the page does not extst')
    throw new Error('Woops the page does not extst')
  // err.statusCode = 404;
   //next(err.message)
//    res.status(404).send('Woops the page does not extst')
// res.status(404).sendFile(__dirname + '/public/404.html');

})

app.use(errorHandler);

function errorHandler(err, req, res, next){
    res.status(500); // internal server error
    res.json({message: err.message})
}
module.exports = app;
