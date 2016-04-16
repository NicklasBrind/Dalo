var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var mysql = require("mysql")
var http = require("http").Server(app);

// Routes
require("./routes/routes.js")(router, app);
app.use("/", router);

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Directory
app.use(express.static(path.join(__dirname, "public")));

// MySQL queues debug variable
app.set('debugq', true);

// 404-Message
app.use(function(request, response, next){
   response.status(404).send("Error 404: Page could not be found!");
});


// TODO: Create a config for this
var connection = mysql.createConnection({
    host : '193.11.129.231',
    port : '3300',
    user : 'dalo',
    password : 'hemsidebygge',
    database : 'hamburger',
});

// Connect to the database
connection.connect(function(err){
    if(!err) { console.log("Database connection SUCCESSFUL...");}
    else { console.log("Database connection FAILED... "); }
});

// Store the connection as "client" for global access
app.set('client', connection);

// Start the server at port 3000
http.listen(3000, function(){
   console.log("Server is running on port: 3000");
});
