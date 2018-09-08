(function() {
    'use strict';

    let path = require('path'),
        rootPath = path.normalize(__dirname + '/../../'),
        envPort = process.env.PORT,
        port = 3030;

    module.exports = {
        development: {
            rootPath: rootPath,
            db: 'mongodb://localhost:27017/skeletonsystem',
            port: envPort || port
        },
        testing: {
            rootPath: rootPath,
            db: 'mongodb://localhost:27017/skeletonsystem',
            port: envPort || port
        },
        production: {
            rootPath: rootPath,
            db: 'mongodb://localhost:27017/skeletonsystem',
            port: envPort || port
        }
    }
}());