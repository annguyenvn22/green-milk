(function (app) {
    'use strict';

    app.registerModule('cms');
    app.registerModule('cms.routes', ['core.routes']);

}(ApplicationConfiguration));