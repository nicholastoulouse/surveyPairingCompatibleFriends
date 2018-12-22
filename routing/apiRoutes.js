
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser')
var allfriends = require('../app/data/friends.js');
var app = express();

// create application/json parser
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

// var connection = mysql.createConnection({
//     host: "127.0.0.1",
//     port: 3306,
//     user: "root",
//     password: "helloMySQL",
//     database: "friend_finder"
// });
app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/api/friends', function(req, res) {
    if (!req.body) return res.sendStatus(400);
    res.json(path.join(__dirname, 'app/data/friends.js'));
});

app.post('/api/friends', urlencodedParser, function(req, res) {
    
    if (!req.body) return res.sendStatus(400);
    
    // put results of survey fields in a new friend object
    var pic = (req.body.photo)? req.body.photo : "http://lorempixel.com/249/325/people/";
    var user = {
        "name": req.body.name,
        "photo": pic,
        "scores": [req.body.q1, req.body.q2, req.body.q3, req.body.q4, req.body.q5, req.body.q6, req.body.q7, req.body.q8, req.body.q9, req.body.q10]
    };
 
    var differences = [];

    function sub(array1, survray) {
        return Math.abs(a - b);
    }

    console.log("All friends are ", allfriends.list);
    // allfriends.list.forEach((f, i) => {
    //     f.scores
    // })
    console.log("Post body: ", req.body);

});

app.get('/survey', function(req, res) { 
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
})