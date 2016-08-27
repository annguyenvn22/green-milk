(function () {
    'use strict';

    angular
        .module('core.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                templateUrl: 'core/client/views/home',
                controller: 'HomeController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('home.index', {
                url: '/',
                templateUrl: 'core/client/views/index',
                controller: 'IndexController',
                controllerAs: 'vm'
            });
    }
}());
