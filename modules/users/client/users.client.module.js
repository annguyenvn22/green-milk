(function(app) {
    'use strict';

    app.registerModule('users');
    app.registerModule('users.routes');
    app.registerModule('users.services');

    app.registerModule('users.admin', ['ui.grid', 'users.admin.services']);
    app.registerModule('users.admin.routes', ['ui.router', 'core.admin.routes']);
    app.registerModule('users.admin.services', ['ngResource']);

}(ApplicationConfiguration));