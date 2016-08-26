(function (app) {
    'use strict';

    app.registerModule('checkout', ['cart.cart-single.services', 'cart.cart-monthly.services', 'checkout.services', 'users.services', 'ui.grid', 'ui.grid.treeView', 'ngCookies', 'angular-storage']);
    app.registerModule('checkout.routes', ['ui.router', 'cart.routes', 'cart.cart-monthly.routes', 'cart.cart-single.routes', 'core.routes']);
    app.registerModule('checkout.services', ['ngResource']);
    
    app.registerModule('checkout.admin', ['chart.js', 'ui.grid']);
    app.registerModule('checkout.admin.routes', ['ui.router', 'core.admin.routes']);

}(ApplicationConfiguration));