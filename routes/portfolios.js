var Navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    
    router.get('/portfolios', function(request, response, next){
        var nav = new Navigation(request.session.loggedIn, request.session.role);
        var client = app.get('client');
        
        nav.getLoginNavigation(function(err, results) {
            // Render page and send data
            return response.render('portfolios', {
                title: 'Portfolios - Dalo',
                login_nav: results
            });
        });    
    });
    return router;
};