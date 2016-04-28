module.exports = function(mod, context, app) {
    // Imagine a database here
    var users = [
        {name: 'Lux'},
        {name: 'Tom'},
        {name: 'Rosa'},
    ];

    mod.find = function() {
        return users;
    };

    mod.findByName = function(name) {
        for (var u in users) {
            if (users[u].name.toLowerCase() === name.toLowerCase()) {
                return users[u];
            }
        }
    };
}
