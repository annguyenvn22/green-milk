'use strict';

var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(app) {

    // Serialize sessions
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    // Deserialize sessions
    passport.deserializeUser(function(user, done) {
        User.findOne({
            _id: user.id
        }, '-password', function(err, user) {
           done(err, user);
        });
    });

    // require strategies

    // bootstrap passport module
    app.use(passport.initialize());

    // use Express's session to track user's session
    app.use(passport.session());

};