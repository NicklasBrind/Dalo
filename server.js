var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var mysql = require("mysql")
var http = require("http").Server(app);

// Routes
require("./routes/routes.js")(router);
app.use("/", router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, "public")));

app.use(function(request, response, next){
   response.status(404).send("Error 404: Page could not be found!");
});


// Inte så säkert att ha informationen här
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

http.listen(3000, function(){
   console.log("Server is running on port: 3000");
});
