var dateFormat = require('dateformat');
var FB = require('fb');
FB.setAccessToken('770450599721631|9e89b9476b14a1c908583a6fb6636bd8');

/**
 *
 */
function getLoginNavigation(client, request, response, data) {
    // TODO: add login check
    var loggedIn = true;
    var navigation = [];
    if (loggedIn) {
        navigation.push( {link: "logout", href: "/logout"} );
        navigation.push( {link: "wiki", href: "/wiki"} );
        
        // TODO: add admin check
        var isAdmin = true;
        if (isAdmin) {
            navigation.push( {link: "admin", href: "/admin"} );
        }
    } else {
        navigation.push( {link: "login", href: "/login"} );
    }
    
    
    
    return response.render('index', {
                title: 'News - Dalo',
                login_nav: navigation,
                news: data.fetchedNews,
                fbfeed: data.fbresponse
            });
}

/**
 * Functions GETs facebook feed
 */
function getFacebookFeed(client, request, response, fetchedNews) {
    FB.api(
        '/dalomotors/posts',
        'GET',
        {},
        function(fbresponse) {
            var data = {fbresponse: fbresponse, fetchedNews: fetchedNews};
            getLoginNavigation(client, request, response, data);
        });
}

/**
 * Function querys database for news
 * @parameter client: the mysql connection
 * @parameter response:
 * @returns query as JSON
 */
function fetchNews(client, request, response){
    
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
        
        getFacebookFeed(client, request, response, fetchedNews);
    })
    
}

module.exports = function(router, app){
    router.get('/', function(request, response, next){
        fetchNews(app.get('client'), request, response);
        
        //return response.render('index', { title: 'Dalo', msg : "Här loggar man  yo"});
    });

    return router;
}