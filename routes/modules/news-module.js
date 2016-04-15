var dateFormat = require('dateformat');
var FB = require('fb');
FB.setAccessToken('770450599721631|9e89b9476b14a1c908583a6fb6636bd8');

module.exports = {

    /**
     * Function querys database for news
     * @parameter client: the mysql connection
     * @callback (error, returned data)
     */
    getNews: function(client, callback){
    
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
            callback("err", {"fetchedNews": fetchedNews});
        })
    },
    
    /**
     * Functions GETs facebook feed
     * @parameter client: the mysql connection
     * @callback (error, returned data)
     * @parameter pagename: the name of the facebook page
     */
    getFacebookPosts: function(client, callback, pagename) {
    FB.api(
        '/' + pagename + '/posts',
        'GET',
        {},
        function(fbresponse) {
            callback("err", {"fbresponse": fbresponse});
        });
}
    
}
    
    
