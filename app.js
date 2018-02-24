'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParse = require('body-parser');
var http = require('http');
var path = require('path');


// Crypto JS Start
var CryptoJS = require('crypto-js');
var WebSocket = require('ws');

var http_port = process.env.HTTP_PORT || 3001;
var p2p_port = process.env.P2P_PORT || 6001;
var initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

var sockets = [];
var MessageType = {
    QUERY_LATEST: 0,
    QUERY_ALL: 1,
    RESPONSE_BLOCKCHAIN: 2
};
// Crypto JS End

var app = express();

app.use(morgan('dev'));
app.use(bodyParse.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`)
});