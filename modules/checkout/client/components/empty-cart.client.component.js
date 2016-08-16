(function() {
    'use strict';

    angular
        .module('checkout')
        .component('gmEmptyCartException', {
            templateUrl: 'checkout/client/views/empty-cart',
            controller: 'EmptyCartController',
            controllerAs: 'vm',
            bindings: {
                condition: '<'
            }
        });
}());