(function() {
    'use strict';
    
    angular
        .module('core.admin.routes')
        .config(CoreAdminConfigFn);
        
    CoreAdminConfigFn.$inject = ['$stateProvider'];
    
    function CoreAdminConfigFn($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'core/client/views/admin/admin.template',
                controller: 'AdminTemplateController',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Admin'
                },
                abstract: true
            })
    }
}());