var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db')


dotenv.config({path: './config/config.env'})


connectDB()


var app = express();


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',  require('./routes/index'))
app.use('/api', require('./routes/api'))

app.use('/api/auth', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))


module.exports = app;
