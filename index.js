var express      = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var path         = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.set('dist', './dist');

app.use(express.static('dist'));

app.use(cookieParser());

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

//First middleware before response is sent
app.use(function(req, res, next){
    console.log("Start");
    next();
 });

//Route handler
app.get('/', function(req, res, next){
    res.send("Middle");
    next();
});

app.get('/components', function(req, res){
    res.render('content');
});

app.use('/', function(req, res){
    console.log('End');
});

app.listen(8080);
console.log('Express server listening on port 8080');