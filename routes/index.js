var async = require('async');
var navigation = require('./modules/navigation-module');
var news = require('./modules/news-module.js');

module.exports = function(router, app){
    router.get('/', function(request, response, next){
        
        var client = app.get('client');
        
        async.parallel({
                news: function(callback) {
                    news.getNews(client, callback);
                },
                posts:  function(callback) {
                    news.getFacebookPagePosts(client, callback, "dalomotors");
                },
                picture:  function(callback) {
                    news.getFacebookPagePicture(client, callback);
                },
                navigation:  function(callback) {
                    navigation.getLoginNavigation(client, callback);
                }
            },
            function(err, results) {
                // Render page and send data
                return response.render('index', {
                    title: 'News - Dalo',
                    news: results.news,
                    fbfeed: results.posts,
                    fbpicture: results.picture,
                    login_nav: results.navigation
                });
            }
        );
    });

    return router;
};