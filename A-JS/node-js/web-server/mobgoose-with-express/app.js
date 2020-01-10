var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var app = express()
mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//app.get('/', require('./routes/index'))
app.use('/databases', require('./routes/databases'))


app.listen(3001)