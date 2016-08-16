(function () {
    'use strict';

    angular
        .module('cart.routes')
        .config(configFn);

    configFn.$inject = ['$stateProvider'];

    function configFn($stateProvider) {
        $stateProvider
            .state('cart.cart-monthly', {
                url  : '/dat-mot-thang',
                views: {
                    'aside'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content': {
                        templateUrl : 'cart/client/views/cart-monthly-aweek',
                        controller  : 'CartMonthlyAweekController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
}());