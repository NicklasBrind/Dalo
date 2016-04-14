var dateFormat = require('dateformat');
var FB = require('fb');
FB.setAccessToken('770450599721631|9e89b9476b14a1c908583a6fb6636bd8');

/**
 * Functions GETs facebook feed
 *
 *
 */
function getFacebookFeed(client, response, fetchedNews) {
    FB.api(
        '/dalomotors/posts',
        'GET',
        {},
        function(fbresponse) {
            return response.render('index', {
                title: 'News - Dalo',
                news: fetchedNews,
                fbfeed: fbresponse
            });
        });
}

/**
 * Function querys database for news
 * @parameter client: the mysql connection
 * @returns query as JSON
 */
function fetchNews(client, response, callback){
    
    // Query database
    var query = "SELECT * FROM view_fetch_news";
    client.query(query, function(err, rows, fields){
        var fetchedNews = [];
        /*
        JSON Structure
        { 
            title: rows.title, 
            content: rows.content, 
            publisher: rows.first_name, 
            date: rows.post_date 
        }
        */
        for (var i = 0; i < rows.length; i++){
            var myDate = dateFormat(rows[i].post_date, "mmmm dS, yyyy, HH:MM:ss");
            fetchedNews.push({
                title: rows[i].title, 
                content: rows[i].content, 
                publisher: rows[i].first_name, 
                date: myDate});
        }
        
        callback(client, response, fetchedNews);
    })
    
}

module.exports = function(router, app){

    router.get('/', function(request, response, next){
        fetchNews(app.get('client'), response, getFacebookFeed);
        
        //return response.render('index', { title: 'Dalo', msg : "Här loggar man  yo"});
    });

    return router;
}