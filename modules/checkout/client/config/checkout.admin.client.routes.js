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
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Quản lý đơn hàng'
                }
            })
            .state('admin.checkout-management.detail', {
                url: '/chi-tiet/:id',
                views: {
                    '@admin': {
                        templateUrl: 'checkout/client/views/admin/checkout-detail',
                        controller: 'CheckoutDetailController',
                        controllerAs: 'vm',
                    }
                },
                ncyBreadcrumb: {
                    label: 'Chi tiết'
                }
            })
    }
}());