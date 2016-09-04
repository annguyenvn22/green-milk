'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    db: {
        uri: 'mongodb://localhost/green-milk-dev',
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
        title: defaultEnvConfig.app.title + ' - Development Environment'
    },
    facebook: {
        clientID: '1299583890081660',
        clientSecret: 'd7ee39711ee9d623426110ff4b18e1b2',
        callbackURL: '/api/auth/facebook/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: '/api/auth/google/callback'
    },
    livereload: true
};
