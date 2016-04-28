# conchain
Chaining dirs together for a nice workflow

Based on consign and middleware-chain

Please not this is very WIP and isnt very user-friendly

# Usage

```
Directory setup:

app
    index
        models
            main.js
        middleware
            main.js
        routers
            main.js
```

Starting a chain:
```javascript
var conchain = require('conchain');

conchain({base: 'app/index'}, app, [
    'models',
    'middleware',
    'routers'
]);
```

Conchain requires 3 arguments

- An options object

Defaults:
```javascript
{
    base: '', // starting directory
    sep: '/', // directory seperator
    log: { // debug logging
        base: true,
        dir: false,
        file: false
    }
}
```
- The express app
- An array of directory names

Example:
```javascript
[
    'models',
    'middleware',
    'routers'
]
```

A chain directory can have multiple javascript files.
A js file should return a function when called with require.
This function has to accept 3 arguments:

- mod: The local script enviroment, you should save everything in here
- context: The global enviroment, all the other scripts get bundled in here
- app: The express app

If you want to access another scripts enviroment you have to call it like this:
`context[directory name][script name]`

# Example

Located in the example directory
