// BASE SETUP
// ===================================
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mysql = require('mysql');
var port = 3000;

var favicon = require('serve-favicon');
var dbconfig = require('./config/database');
var bodyparser = require('body-parser');

// FAVICON
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// BODY PARSER
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// ===================================
var router = express.Router();


app.use('/', require('./controllers/controller-index')(router));
app.use(function (request, response, next) {
    response.status(404).send('Error 404: Page could not be found!');
});

// VIEWS
// ===================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// MySQL DATABASE
// ===================================
app.set('debugq', true);

// TODO: Create a config for this
var connection = mysql.createConnection(dbconfig.connection);

connection.connect(function (err) {
    if (!err) {
        console.log("Database connection SUCCESSFUL...");
    } else {
        console.log("Database connection FAILED... ");
    }
});

// Store the connection as "client" for global access
app.set('client', connection);

// START SERVER
// ===================================
http.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
