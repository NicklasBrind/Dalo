var simpleBarrier = require('simple-barrier');
var navigation = require('./modules/navigation-module');
var news = require('./modules/news-module.js');

module.exports = function(router, app){
    router.get('/', function(request, response, next){
        var barrier = simpleBarrier()
        var client = app.get('client');
        
        
        
        news.getNews(client, barrier.waitOn);
        news.getFacebookPosts(client, barrier.waitOn);
        navigation.getLoginNavigation(client, barrier.waitOn, "dalomotors");
        // TODO: barrier nås aldrig. #######################################################################
        // TODO: Ifall resultaten kommer i annan ordning blir det fel.
        barrier.endWith(function(results) {
            return response.render('index', {
                title: 'News - Dalo',
                news: results[0].fetchedNews,
                fbfeed: results[1].fbresponse,
                login_nav: results[2].navigation
            });
        });
    });

    return router;
}