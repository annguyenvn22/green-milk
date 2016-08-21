(function() {
    'use strict';
    
    angular
        .module('users.admin.routes')
        .config(AdminRouteConfigFn);
        
    AdminRouteConfigFn.$inject = ['$stateProvider'];
    
    function AdminRouteConfigFn($stateProvider) {
        $stateProvider
            .state('admin.login', {
               url: '/dang-nhap',
               templateUrl: 'users/client/views/admin/login.admin',
               controller: 'AdminLoginController',
               controllerAs: 'vm'
            });
    }
}());