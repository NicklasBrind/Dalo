var simpleBarrier = require('simple-barrier');
var navigation = require('./modules/navigation-module');
var news = require('./modules/news-module.js');

module.exports = function(router, app){
    router.get('/', function(request, response, next){
        
        // Create a barrier
        var barrier = simpleBarrier();
        var client = app.get('client');
        
        // Get all data from modules async, and make barrier wait for them
        news.getNews(client, barrier.waitOn());
        news.getFacebookPosts(client, barrier.waitOn(), "dalomotors");
        navigation.getLoginNavigation(client, barrier.waitOn());
        
        barrier.endWith(function(results) {
            
            // Since results are stored in unknown order in "results",
            // we need to iterate through the values and confirm them
            // So we can send them corrently in response.render below
            var fetchedNews = [];
            var fbresponse = [];
            var navigation = [];
            
            for (var i = 0;i < results.length; i++) {
                if (results[i].fetchedNews != null) {
                    fetchedNews = results[i].fetchedNews;
                }
                if (results[i].fbresponse != null) {
                    fbresponse = results[i].fbresponse;
                }
                if (results[i].navigation != null) {
                    navigation = results[i].navigation;
                }
            }
            
            // Render page and send data
            return response.render('index', {
                title: 'News - Dalo',
                news: fetchedNews,
                fbfeed: fbresponse,
                login_nav: navigation
            });
        });
    });

    return router;
}