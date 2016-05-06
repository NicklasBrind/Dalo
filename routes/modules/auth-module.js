"use strict";
var config = require("../../config/config");
var mysql = require("mysql");
class authentication{
    constructor(){
        this.client = mysql.createConnection(config.connection);;
    }
    
    login(request, response, next){
        var username = request.body.username;
        var password = request.body.password;
        
        this.client.query("select username, password, role from users where username=? and password=?", [username, password], function(err, rows, fields){
            if(err){
                console.log(err);
                throw err;
                request.session.loggedIn = false;
                return response.redirect("/login");
            }
            request.session.username = rows[0].username;
            request.session.password = rows[0].password;
            request.session.role = rows[0].role;
            request.session.loggedIn = true;
            return response.redirect("/");
        });
    }
    
    isAuthenticated(request, response, next){
        if(request.session.loggedIn){
            return next();
        }
        console.log("not logged in");
        return response.redirect("/login");
        
    }
    
    isAdminAuthenticated(request, response, next){
        if(request.session.loggedIn && request.session.role === "admin"){
            return next();
        }
        console.log("Not admin inlogged");
        return response.redirect("/");
    }
    
    logout(request, response, next){
        if(request.session.loggedIn){
            request.session.destroy();
            return response.redirect("/");
        }
        return reponse.redirect("/");
    }
}

module.exports = authentication;