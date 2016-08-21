(function() {
    'use strict';
    
    angular
        .module('checkout.admin.routes')
        .config(CheckoutAdminRouteConfigFn);
        
    CheckoutAdminRouteConfigFn.$inject = ['$stateProvider'];
    
    function CheckoutAdminRouteConfigFn($stateProvider) {
        $stateProvider
            .state('admin.checkout-management', {
                url: '/quan-ly-don-hang',
                templateUrl: 'checkout/client/views/admin/checkout-management.admin',
                controller: 'AdminCheckoutManagementController',
                controllerAs: 'vm'
            })
    }
}());