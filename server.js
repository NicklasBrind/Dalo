// BASE SETUP
// ===================================
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var mysql = require('mysql');
var port = 3000;
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');
var favicon = require('serve-favicon');


// FAVICON
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


// SASS SETUP
app.use(sassMiddleware({
    /* Options */
    src: __dirname + '/public/sass',
    dest: __dirname + '/public/stylesheets',
    debug: true, 
    outputStyle: 'compressed',
    prefix: '/stylesheets'
}));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// ===================================
var router = express.Router();
require('./routes/routes.js')(router, app);
app.use('/', router);
app.use(function(request, response, next){
   response.status(404).send('Error 404: Page could not be found!');
});

// VIEWS
// ===================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MySQL DATABASE
// ===================================
app.set('debugq', true);

// TODO: Create a config for this
var connection = mysql.createConnection({
    host : '193.11.129.231',
    port : '3300',
    user : 'dalo',
    password : 'hemsidebygge',
    database : 'hamburger',
});

connection.connect(function(err){
    if(!err) { console.log("Database connection SUCCESSFUL...");}
    else { console.log("Database connection FAILED... "); }
});

// Store the connection as "client" for global access
app.set('client', connection);

// START SERVER
// ===================================
http.listen(port, function(){
   console.log('Server is running on port: ' + port);
});
