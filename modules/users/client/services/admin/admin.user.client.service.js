(function () {
    'use strict';

    angular
        .module('users.admin.services')
        .factory('AdminUserService', AdminUserService);

    AdminUserService.$inject = ['$resource'];

    function AdminUserService($resource) {
        return {
            query: function() {
                return [
                    {displayName: 'Nguyen Van A', username: 'annvc', dateCreated: new Date(), provider: 'facebook', roles: ['user'], address: 'Ap 94 xa xuan thanh thong nhat dong nai'},
                    {displayName: 'Nguyen Van B', username: 'adminone', dateCreated: new Date(), provider: 'facebook', roles: ['admin', 'admin', 'seller'], address: 'Ap 94 xa xuan thanh thong nhat dong nai'},
                    {displayName: 'Nguyen Van C', username: 'normaluser', dateCreated: new Date(), provider: 'facebook', roles: ['user'], address: 'Ap 94 xa xuan thanh thong nhat dong nai'}
                ];
            }
        }
    }
}());
