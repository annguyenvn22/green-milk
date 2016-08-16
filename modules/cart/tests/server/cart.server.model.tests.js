'use strict';

var expect   = require('chai').expect;
var mongoose = require('../../../../config/lib/mongoose');

var Cart, cartObj;

describe('test cart.server.model.js', function () {

    // before run all tests
    before(function (done) {
        // connect to mongodb 
        mongoose.start();
        // load Cart model 
        Cart    = require('mongoose').model('Cart');
        // create new fake object
        cartObj = new Cart({
            data: ['this', 'is', 'array', 'of', 'some data']
        });

        // Cleaning 'Cart'
        Cart.remove({}, done);
    });

    // after run all tests
    after(function (done) {
        // clean database
        Cart.remove({}, done);
    });

    it('Cart should be loaded', function () {
        expect(Cart).to.be.defined;
    });

    it('Starting with no record in DB', function (done) {

        Cart.find({}, function (err, records) {
            expect(records).to.be.empty;
            done();
        });
    });

    it('save()', function (done) {
        cartObj.save(function (err, cart) {
            expect(err).to.be.null;
            // when cart have _id field ==> it saved to database
            expect(cart).to.have.property('_id');
            done();
        });
    });

    it('status: something --> fail', function (done) {
        cartObj.status = 'something';
        cartObj.save(function (err, cart) {
            expect(err).to.be.defined;
            expect(cart).to.be.undefined;
            expect(err.errors.status).to.be.defined;
            done();
        });
    });

    it('changeStatus()', function () {
        var beforeVal  = 'new';
        var changedVal = 'resovled';
        Cart.changeStatus('_id here', function (err, obj) {
            expect(err).to.be.null;
            expect(obj.status).to.equal(changedVal);
            expect(obj.status).to.not.equal(beforeVal);
        })
    });

});
