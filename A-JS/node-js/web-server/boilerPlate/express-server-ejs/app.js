var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var personRouter = require('./routes/person');
var contact = require ('./routes/contact')
var users = require ('./routes/users')
var app = express();

app.set('view engine', 'ejs');         //  added view engine

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(/* '/style', */ express.static(path.join(__dirname, 'public' )));

app.use('/', indexRouter);
app.use('/person/', personRouter);
app.use('/contact/', contact);
app.use('/users/', users);

module.exports = app;
