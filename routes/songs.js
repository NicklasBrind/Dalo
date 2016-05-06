var Navigation = require('./modules/navigation-module');

module.exports = function (router, app) {
    
    router.get('/songs', function (request, response, next) {
        var nav = new Navigation(request.session.loggedIn, request.session.role);
        var client = app.get('client');
        
        nav.getLoginNavigation(function (err, results) {
            return response.render('songs', {
                title: 'Songs - Dalo',
                login_nav: results
            });
        });
    });
    
    return router;
};