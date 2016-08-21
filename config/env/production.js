'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    db: {
        uri: 'mongodb://localhost/green-milk-production',
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
        title: defaultEnvConfig.app.title
    },
    port             : process.env.PORT || 80,
    host             : process.env.HOST || '103.221.221.19',
    facebook: {
        clientID: process.env.FACEBOOK_ID || '1208350882538295',
        clientSecret: process.env.FACEBOOK_SECRET || 'f42986dc986c67149af82023e7a3b9f2',
        callbackURL: '/api/auth/facebook/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || 'APP_ID',
        clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
        callbackURL: '/api/auth/google/callback'
    },
    livereload: true
};
