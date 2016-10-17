"use strict";
const Promise = require('bluebird');

class Navigation{
    constructor(user){
        this.user = user || undefined
        this.menu = [];
    }
    
    getLoginNavigation(){
        if(this.user){
            // Material icons are found here: https://design.google.com/icons/
            this.menu.push( {link: "logout", href: "/logout", materialicon: "directions_run"} );
            this.menu.push( {link: "profile", href: "/profile", materialicon: "account_box"} );
            this.menu.push( {link: "wiki", href: "/wiki", materialicon: "language"} );
            if(this.user.admin){
               this.menu.push( {link: "admin", href: "/admin", materialicon: "build"} ); 
            }
        }else{  
            this.menu.push( {link: "login", href: "/login", materialicon: "exit_to_app"} );
        }
        return Promise.resolve(this.menu);
    }
    
 
}


module.exports = Navigation;