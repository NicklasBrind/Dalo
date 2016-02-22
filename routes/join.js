var join = function(router){
    router.get('/join', function(request, response, next){
        return response.render('join', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
}

module.exports = join;