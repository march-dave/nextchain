'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParse = require('body-parser');
var http = require('http');
var path = require('path');


var CryptoJS = require('crypto-js');
var WebSocket = require('ws');

var app = express();

app.use(morgan('dev'));
app.use(bodyParse.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`)
});