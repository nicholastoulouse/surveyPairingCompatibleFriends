
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

// create application/json parser
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "helloMySQL",
    database: "friend_finder"
});

app.get('/api/friends', function(req, res) {
    if (!req.body) return res.sendStatus(400);
    res.json(path.join(__dirname, 'app/data/friends.js'));
});

app.post('/api/friends', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    const postBody = request.body;
    console.log(postBody);
});

app.get('/survey', function(req, res) { 
    res.sendFile(path.join(__dirname, 'public/survey.html'));
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
})