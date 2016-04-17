var navigation = require('./modules/navigation-module');

var rookie = function(router, app){
    
    router.get('/rookieperiod', function(request, response, next){
        // Get client
        var client = app.get('client');
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('rookieperiod', {
                title: 'Rookieperiod - Dalo',
                login_nav: results
            });
        });    
    });
    
    router.get('/rookie_about', function(request, response, next){
        // Get client
        var client = app.get('client');
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('rookie_about', {
                title: 'Rookieperiod - About - Dalo',
                login_nav: results
            });
        });    
    });
    
    return router;
};

module.exports = rookie;