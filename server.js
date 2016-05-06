// BASE SETUP
// ===================================
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mysql = require('mysql');
var port = process.env.PORT || 3000;
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var favicon = require('serve-favicon');
var bodyparser = require('body-parser');
var session = require('express-session');
var config = require('./config/config');

// FAVICON
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Options
app.use(sassMiddleware({
        src : __dirname + '/public/sass',
        dest : __dirname + '/public/stylesheets',
        debug: false,
        outputStyle : 'compressed',
        prefix : '/stylesheets'
    }));
app.use(session(config.session));

// BODY PARSER
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

// VIEWS
// ===================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// ===================================
var router = express.Router();

require('./routes/routes.js')(router, app);
app.use('/', router);

app.use(function (request, response, next) {
    response.status(404).send('Error 404: Page could not be found!');
});



// MySQL DATABASE
// ===================================
var connection = mysql.createConnection(config.connection);

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
