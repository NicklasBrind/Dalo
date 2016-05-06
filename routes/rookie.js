var Navigation = require('./modules/navigation-module');

var rookie = function(router, app){
    
    router.get('/rookieperiod', function(request, response, next){
        var nav = new Navigation(request.session.loggedIn, request.session.role);
        var client = app.get('client');
        
        nav.getLoginNavigation(function(err, results) {
            
            return response.render('rookieperiod', {
                title: 'Rookieperiod - Dalo',
                login_nav: results
            });
        });    
    });
    
    router.get('/rookie_about', function(request, response, next){
        var nav = new Navigation(request.session.loggedIn, request.session.role);
        var client = app.get('client');
        
        navigation.getLoginNavigation(function(err, results) {
            
            return response.render('rookie_about', {
                title: 'Rookieperiod - About - Dalo',
                login_nav: results
            });
        });    
    });
    
    return router;
};

module.exports = rookie;