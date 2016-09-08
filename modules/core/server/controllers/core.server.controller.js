'use strict';

/**
 * render index page
 */
exports.renderIndex = function (req, res) {
    var safeUserObject = null;
    if (req.user) {
        safeUserObject = {
            displayName: req.user.displayName,
            provider: req.user.provider,
            username: req.user.username,
            created: req.user.created.toString(),
            roles: req.user.roles,
            profileImageURL: req.user.profileImageURL,
            email: req.user.email,
            lastName: req.user.lastName,
            firstName: req.user.firstName,
            additionalProvidersData: req.user.additionalProvidersData,
            address: req.user.address,
            phoneNumber: req.user.phoneNumber
        };
    }
    res.render('modules/core/server/views/index', {
        user: safeUserObject
    });
};

/**
 * Using with ui-router, defining 'templateUrl' is hard
 * -> convert *.pug > *.html before send to client
 */
exports.pugToHtml = function (req, res, next) {
    // load file system module
    var fs          = require('fs'),
        _           = require('lodash'),
        requestFile = 'modules' + req.url + '.client.view.pug',
        extName     = '.pug';


    // the requestFile isn't *.pug file
    if (!_.endsWith(requestFile, extName)) {
        next();
        return;
    }

    // check requestFile is exsit or not
    fs.access(requestFile, fs.F_OK, function (err) {
        if (err) {
            return res.status(404).send();
        }
        res.render(requestFile);
    });

};