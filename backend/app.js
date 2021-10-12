var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();


require ('./db')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


let userRouter = require('./routes/user');
let cardRouter = require('./routes/card');

app.use('/user', userRouter);
app.use('/cards', cardRouter);


module.exports = app;
