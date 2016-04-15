module.exports = {
    /**
     * Gets the member login bar
     * @parameter client:
     * @parameter callback:
     * @returns nothing
     */
    getLoginNavigation: function (client, callback) {
        // TODO: add login check
        var loggedIn = true;
        var navigation = [];
        if (loggedIn) {
            navigation.push( {link: "logout", href: "/logout"} );
            navigation.push( {link: "wiki", href: "/wiki"} );

            // TODO: add admin check
            var isAdmin = true;
            if (isAdmin) {
                navigation.push( {link: "admin", href: "/admin"} );
            }
        } else {
            navigation.push( {link: "login", href: "/login"} );
        }
        callback("err", {"navigation": navigation});
    }
}
    