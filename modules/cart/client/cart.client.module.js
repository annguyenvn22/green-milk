(function (app) {
    'use strict';

    app.registerModule('cart');
    app.registerModule('cart.routes', ['ui.router']);
    app.registerModule('cart.services', ['ngResource']);

    app.registerModule('cart.cart-monthly', ['ngDragDrop']);
    app.registerModule('cart.cart-monthly.routes', ['ui.router', 'cart.routes']);
    app.registerModule('cart.cart-monthly.services', ['ngResource', 'cart.services']);

    app.registerModule('cart.cart-single');
    app.registerModule('cart.cart-single.routes', ['ui.router', 'cart.routes']);
    app.registerModule('cart.cart-single.services', ['ngResource', 'cart.services']);

}(ApplicationConfiguration));
