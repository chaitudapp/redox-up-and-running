var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var request = require('request');


app.use(bodyParser.json());

app.listen(8081,function () {
    console.log('Server started. Listening on port ');
});

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

