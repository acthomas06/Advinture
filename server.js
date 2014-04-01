'use strict';

// Module dependencies.
var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost/uvlife_db');

var app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.bodyParser());

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function callback() {
  console.log('MongoDB connection successful to port ' + port);
});

var api = require('./api/post.js');

app.get('/posts', api.get);
app.post('/posts', api.post);
// Start server
var port = 8080;
app.listen(port);
console.log("Listening on port " + port);

module.exports = app;