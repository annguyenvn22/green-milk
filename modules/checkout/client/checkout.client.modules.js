(function (app) {
    'use strict';

    app.registerModule('checkout', ['ngMessages', 'cart.cart-single.services', 'cart.cart-monthly.services', 'checkout.services', 'users.services', 'ui.grid', 'ui.grid.treeView', 'ngCookies', 'angular-storage']);
    app.registerModule('checkout.routes', ['ui.router', 'cart.routes', 'cart.cart-monthly.routes', 'cart.cart-single.routes', 'core.routes']);
    app.registerModule('checkout.services', ['ngResource']);
    
    app.registerModule('checkout.admin', ['chart.js', 'ui.grid', 'ui.grid.treeView', 'ui.bootstrap']);
    app.registerModule('checkout.admin.routes', ['ui.router', 'core.admin.routes']);
    app.registerModule('checkout.admin.services', ['ngResource', 'cart.cart-monthly.services', 'cart.cart-single.services']);

}(ApplicationConfiguration));