var rookie = function(router){
    
    router.get('/rookieperiod', function(request, response, next){
        return response.render('rookieperiod', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/rookie_about', function(request, response, next){
        return response.render('rookie_about', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    return router;
}

module.exports = rookie;