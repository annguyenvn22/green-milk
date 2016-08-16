(function () {
    'use strict';

    angular
        .module('cart.routes')
        .config(configFn);

    configFn.$inject = ['$stateProvider'];

    function configFn($stateProvider) {
        $stateProvider
            .state('cart', {
                url        : '/gio-hang',
                templateUrl: 'cart/client/views/cart',
                abstract   : true
            });
    }
}());