var Navigation = require('../../modules/navigation-module');
var auth = require('../../modules/auth-module');

module.exports = function (router, app) {
    router.get('/admin', auth.isAdminAuthenticated, function (request, response, next) {
        // Get client
        var client = app.get('client');
        var nav = new Navigation(true, "admin");
        
        nav.getLoginNavigation(function (err, results) {
            return response.render('admin', {
                title: 'Admin - Dalo',
                login_nav: results
            });
        });
    });
    
    return router;
};