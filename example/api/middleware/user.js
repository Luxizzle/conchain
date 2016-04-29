module.exports = function(mod, context, app) {
    // you would use a db ;)
    var user = context.models.user

    mod.index = function(req, res, next) {
        return res.redirect('/users')
    }

    mod.all = function(req, res, next) {
        var users = user.find()
        return res.json(users)
    }

    mod.findName = function(req, res, next) {
        var userf = user.findByName(req.params.name)
        return res.json(userf)
    }
}
