var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

var http = require("http").Server(app);

//routes
var routes = require("./routes/routes.js")(router);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, "public")));


app.use("/", routes);
app.use("/login", routes);

app.use(function(request, response, next){
   response.status(404).send("Error 404: Page could not be found!");
});

http.listen(3000, function(){
   console.log("Server is running on port: 3000"); 
});