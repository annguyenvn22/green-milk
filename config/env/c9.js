'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    db: {
        uri: 'mongodb://localhost/green-milk-c9',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    log: {
        // logging with Morgan - https://github.com/expressjs/morgan
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'dev',
        fileLogger: {
            directoryPath: process.cwd(),
            fileName: 'app.log',
            maxsize: 10485760,
            maxFiles: 2,
            json: false
        }
    },
    app: {
        title: defaultEnvConfig.app.title + ' - c9.io'
    },
    port: process.env.PORT,
    host: process.env.IP,
    facebook: {
        clientID: '1299586666748049',
        clientSecret: 'af652e660148f02aba6493a324cb2d1e',
        callbackURL: '/api/auth/facebook/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: '/api/auth/google/callback'
    },
    livereload: true
};
