'use strict';

var request  = require('supertest'),
    server   = require('../../../../server'),
    mongoose = require('mongoose'),
    expect   = require('chai').expect,
    Cart     = mongoose.model('Cart');

var cartSingle = ['some', 'data'];

describe('test cart.server.routes.js', function () {

    before(function (done) {
        // clean the 'carts' collection
        Cart.remove({}, done);
    })

    it('All dependencies should be loaded', function () {
        expect(request).to.be.defined;
        expect(server).to.be.defined;
        expect(Cart).to.be.defined;

    });

    it('/api/cart-single', function (done) {
        request(server)
            .post('/api/cart-single')
            .set('Accept', 'application/json')
            .send(cartSingle)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                // this will be saved to db
                Cart.find({}, function (err, carts) {
                    if (err) done(err);
                    expect(carts.length).to.equal(1);
                    done();
                })
            });
    });

}) 