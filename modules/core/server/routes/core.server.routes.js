'use strict';

module.exports = function (app) {
    var core = require('../controllers/core.server.controller');

    /**
     * render index page
     */
    app.route('/').get(core.renderIndex);


    /**
     * convert *.pug to *.html before send to client
     */
    app.route('/*').get(core.pugToHtml);

    return app;
}
