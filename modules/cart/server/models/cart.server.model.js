'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CartSchema = new Schema({

    // cart from client
    data: {
        type    : Array,
        required: true
    },

    // date created
    date: {
        type   : Date,
        default: Date.now
    },

    // who create it?
    username: {
        type   : String,
        default: 'default'
    },

    // The folloing is allowed: 'new', 'resovled', 'rejected'
    status: {
        type   : String,
        default: 'new',
        enum   : ['new', 'resoved', 'rejected']
    }
});

/**
 * Change status of the cart
 */
CartSchema.statics.changeStatus = function (id, newStatus, cb) {
    this.findOne({_id: id}, function (err, cart) {
        if (err) return 'Cart not found!';

        cart.status = 'status';

        return cart.save(cb);
    });
};

mongoose.model('Cart', CartSchema);