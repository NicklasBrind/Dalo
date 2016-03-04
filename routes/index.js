module.exports = function(router){

    router.get('/', function(request, response, next){
        return response.render('index', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
  
    return router;
}