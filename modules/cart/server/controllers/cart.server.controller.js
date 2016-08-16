'use strict';

var mongoose = require('mongoose'),
    Cart     = mongoose.model('Cart');

/**
 * create new cart object and save it
 */
exports.create = function (req, res) {
    var c = new Cart({
        data: req.body
    });
    c.save(function (err) {
        if (err) {
            res.status(400).send();
        } else {
            res.status(200).send();
        }
    });

}