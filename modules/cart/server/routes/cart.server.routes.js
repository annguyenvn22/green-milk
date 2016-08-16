'use strict';

var cart = require('../controllers/cart.server.controller.js');

module.exports = function (app) {
    app.route('/api/cart-single').post(cart.create);
}