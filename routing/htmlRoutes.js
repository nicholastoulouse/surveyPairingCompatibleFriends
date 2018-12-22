var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();

app.use(express.static("public"));

app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/survey', function(req, res) { 
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
})