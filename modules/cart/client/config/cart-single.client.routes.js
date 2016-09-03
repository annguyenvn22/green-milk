(function () {
    'use strict';

    angular
        .module('cart.routes')
        .config(configFn);

    configFn.$inject = ['$stateProvider'];

    function configFn($stateProvider) {
        $stateProvider
            .state('home.cart.cart-single', {
                url  : '/dat-mot-lan',
                views: {
                    'aside'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content': {
                        templateUrl : 'cart/client/views/cart-single-product',
                        controller  : 'CartSingleProductController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
}());