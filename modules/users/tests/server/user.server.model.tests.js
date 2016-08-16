'use strict';

var expect   = require('chai').expect;
var mongoose = require('mongoose');

var User, user1;

describe('test user.server.model.js', function () {

    before(function () {
        require('../../../../config/lib/mongoose').start();
        User = mongoose.model('User');

        user1 = new User({
            username : 'annvcit',
            firstName: 'Chuc An',
            lastName : 'Nguyen Van'
        });
    });

    it('save()', function (done) {
        // before save user1
        expect(user1.__v).to.be.undefined;
        user1.save(function (err, user) {
            expect(user1.__v).to.be.defined;
            done();
        });
    });

});
