/**
 * In templateUrl, do not use 'modules/client/views/homepage.client.view.pug'
 * drop 'modules'
 * If we put the 'modules' into templateUrl ==> same URL with static route which
 * Express server is routing ==> fetch *.pug as text -- not compile into *.html
 */

(function () {
    'use strict';

    angular
        .module('core.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('homepage', {
                url        : '/',
                templateUrl: 'core/client/views/homepage',
            });
    }
}());