var async = require('async');
var navigation = require('./modules/navigation-module');
var news = require('./modules/news-module.js');

// TODO: Put in config maybe
var facebookpage = 'dalomotors';


module.exports = function(router, app){
    router.get('/', function(request, response, next){
        
        var client = app.get('client');
        
        async.parallel({
                news: function(callback) {
                    news.getNews(client, callback);
                },
                posts:  function(callback) {
                    news.getFacebookPagePosts(callback, facebookpage);
                },
                picture:  function(callback) {
                    news.getFacebookPagePicture(callback, facebookpage);
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
                    facebook: 
                    { 
                        picture: results.picture, 
                        posts: results.posts, 
                        name: facebookpage
                    },
                    login_nav: results.navigation
                });
            }
        );
    });

    return router;
};