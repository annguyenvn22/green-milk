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
               
            })
            .state('admin.user-management', {
                url: '/quan-ly-nguoi-dung',
                templateUrl: 'users/client/views/admin/users-management',
                controller: 'UserManagementController',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Quản lý người dùng'
                }
            })
    }
}());