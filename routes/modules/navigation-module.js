module.exports = {
    /**
     * Gets the member login bar
     * @param  {Object} client - The mysql connection
     * @param  {requestCallback} callback - (error, data)
     */
    getLoginNavigation: function (client, callback) {
        // TODO: add login check
        var loggedIn = true;
        var navigation = [];
        if (loggedIn) {
            // Material icons are found here: https://design.google.com/icons/
            navigation.push( {link: "logout", href: "/logout", materialicon: "directions_run"} );
            navigation.push( {link: "profile", href: "/profile", materialicon: "account_box"} );
            navigation.push( {link: "wiki", href: "/wiki", materialicon: "language"} );
            
            // TODO: add admin check
            var isAdmin = true;
            if (isAdmin) {
                navigation.push( {link: "admin", href: "/admin", materialicon: "build"} );
            }
        } else {
            navigation.push( {link: "login", href: "/login", materialicon: "exit_to_app"} );
        }
        
        callback(null, navigation);
    }
};
    