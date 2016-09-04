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
    status: {
        type: [{
            type: String,
            enum: ['resolved', 'pending', 'rejected']
        }],
        default: 'pending'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    cart   : []
});

mongoose.model('Checkout', CheckoutSchema);