/**
 * Created by annvc on 8/7/2016.
 */
(function () {
    'use strict';

    // Authentication service for user variables

    angular
        .module('users.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$window'];

    function Authentication($window) {
        var auth = {
            user: $window.user
        };

        return auth;
    }
}());
