(function () {
    'use strict';

    angular
        .module('checkout.services')
        .factory('CheckoutService', CheckoutService);

    CheckoutService.$inject = ['$resource'];
    function CheckoutService($resource) {
        var Checkout = $resource('/api/checkout/:checkoutId', {
            // Default params.
        }, {
            // Actions.
        }, {
            // Options. When cart (both monthly and single) is empty.
            cancelable: true
        });

        return Checkout;

        ////////////////
    }
})();