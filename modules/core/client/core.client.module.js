(function (app) {
    'use strict';

    app.registerModule('core', ['cart.cart-single.services', 'cart.cart-monthly.services']);
    app.registerModule('core.routes', ['ui.router']);

    app.registerModule('core.admin', ['ncy-angular-breadcrumb']);
    app.registerModule(('core.admin.routes'), ['ui.router']);
    
}(ApplicationConfiguration));