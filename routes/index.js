module.exports = function(router){

    router.get('/', function(request, response, next){
        response.render('index', { title: 'Dalo', msg : "Välkommen till Dalo hemsidan"});
    });

    return router;
}