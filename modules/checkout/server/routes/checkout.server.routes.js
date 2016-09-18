'use strict';

/**
 * Module dependencies
 */
var checkout = require('../controllers/checkout.server.controller');

module.exports = checkoutRouteConfig;

function checkoutRouteConfig(app) {

    app.route('/api/checkouts')
        .post(checkout.save)
        .get(checkout.list);

}