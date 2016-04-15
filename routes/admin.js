var queues = require('mysql-queues');

module.exports = function(router, app){
    router.get('/admin', function(request, response, next){
        
        var client = app.get('client');
        
        queues(client, app.get('debugq'));
        
        var q = client.createQueue();
        q.query('SELECT * FROM view_fetch_news', function (err, rows, fields) {
            console.log(rows[0].content);
        });
        q.execute();
        
       return response.render('admin', { title: 'Dalo' });
    });
    
    return router;
}