module.exports = function(router){
    
    router.get('/board', function(request, response, next){
        return response.render('board', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    return router;
}