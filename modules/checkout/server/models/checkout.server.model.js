'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * Checkout Schema
 */
var CheckoutSchema = new Schema({
    type   : String,
    created: {
        type   : Date,
        default: Date.now
    },
    cart   : []
});

mongoose.model('Checkout', CheckoutSchema);