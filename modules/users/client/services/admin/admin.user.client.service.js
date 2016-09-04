(function () {
    'use strict';

    angular
        .module('users.admin.services')
        .factory('AdminUserService', AdminUserService);

    AdminUserService.$inject = ['$resource'];

    function AdminUserService($resource) {
        return $resource('/api/users')
    }
}());
