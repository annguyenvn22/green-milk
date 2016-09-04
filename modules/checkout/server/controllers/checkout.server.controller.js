'use strict';

/**
 * Modules dependencies
 */
var mongoose = require('mongoose'),
    Checkout = mongoose.model('Checkout');

exports.save = save;

function save(req, res) {
    var checkout = new Checkout(req.body);
    checkout.user = req.user;
    checkout.save(function saveCheckout(err) {
        if (err) {
            res.status(400).send({
                message: 'Saving checkout failure'
            });
        } else {
            res.json(checkout);
        }
    });
}

