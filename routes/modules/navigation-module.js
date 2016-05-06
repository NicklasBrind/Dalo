"use strict";
class Navigation{
    /**
     * Gets the member login bar
     * @param  {Object} client - The mysql connection
     * @param  {requestCallback} callback - (error, data)
     * @param {object} Pass to response
     */
    constructor(loggedIn, role){
        this.loggedIn = loggedIn;
        this.role = role;
        this.navigation = [];
    }
    
    getLoginNavigation(callback){
         if (this.loggedIn) {
            // Material icons are found here: https://design.google.com/icons/
            this.navigation.push( {link: "logout", href: "/logout", materialicon: "directions_run"} );
            this.navigation.push( {link: "profile", href: "/profile", materialicon: "account_box"} );
            this.navigation.push( {link: "wiki", href: "/wiki", materialicon: "language"} );
            
            // TODO: add admin check
            if (this.role === "admin") {
                this.navigation.push( {link: "admin", href: "/admin", materialicon: "build"} );
            }
             
        } else {
            this.navigation.push( {link: "login", href: "/login", materialicon: "exit_to_app"} );
        }
        
        callback(null, this.navigation);
    }
}
module.exports = Navigation;