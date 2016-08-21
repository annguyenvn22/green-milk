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
               views: {
                   '@': { // <----- months later, I'm going to asking my self: what the fuck is this?
                       templateUrl: 'users/client/views/admin/login.admin',
                        controller: 'AdminLoginController',
                        controllerAs: 'vm'
                   }
               }
               
            });
    }
}());