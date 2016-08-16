(function(app) {
    'use strict';

    app.registerModule('users');
    app.registerModule('users.routes');
    app.registerModule('users.services');

    app.registerModule('users.admin');
    app.registerModule('users.admin.routes');
    app.registerModule('users.admin.services');

}(ApplicationConfiguration));