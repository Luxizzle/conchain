var express = require('express'),
    conchain = require('conchain')
    app = express();

conchain({
    base: 'api',
    sep: '/',
    log: {
        base: true,
        dir: true,
        file: true
    }
}, app, [
    'models',
    'middleware',
    'routers'
])

app.listen(3000, 'localhost', function() {
    console.log('Working on localhost:3000')
})
