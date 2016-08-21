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
                templateUrl: 'core/client/views/admin.template',
                abstract: true
            })
    }
}());