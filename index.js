// Chaining dirs together for a nice workflow
// Created by Lux Pandora

var root = require('app-root-path'),
    fs = require('fs')

module.exports = function(options, app, dirs) {
    options = options || {}


    var _options = {
        base: '',
        sep: '/',
        log: {
            base: false,
            dir: false,
            file: false
        }
    }

    for (var o in options) {
        if (o !== 'log') { _options[o] = options[o]; }
    }
    if (options.log) {
        for (var o in options.log) {
            _options.log[o] = options.log[o];
        }
    }

    var context = {_app: app}

    if (_options.log.base) console.log('-', _options.base)
    dirs.forEach(function(cur, index) {
        if (_options.log.dir) console.log('--', cur)

        var curdir = root + '/' + _options.base + _options.sep + cur

        //get the files in the directory
        var files = fs.readdirSync(curdir)

        //create a place for it to save
        context[cur] = {}

        //console.log(files)
        files.forEach(function(curfile) {
            var name = curfile.split('.')[0]
            if (!context[cur][name]) {
                context[cur][name] = {}
            }

            var mod = require(curdir + '/' + curfile)(context[cur][name], context, app)
            if (_options.log.file) console.log('---', curfile)

        })
    })

}
