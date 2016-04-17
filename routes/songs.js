var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    router.get('/songs', function(request, response, next){
        // Get client
        var client = app.get('client');
        
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('songs', {
                title: 'Songs - Dalo',
                login_nav: results
            });
        });
    });
    
    return router;
};