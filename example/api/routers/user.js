module.exports = function(mod, context, app) {

    var user = context.middleware.user

    app.get('/', user.index)
    app.get('/users', user.all)
    app.get('/users/:name', user.findName)
}
