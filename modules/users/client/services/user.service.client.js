(function () {
    'use strict';

    angular
        .module('users.services')
        .factory('UserService', UserService);

    UserService.$inject = ['$resource'];

    function UserService($resource) {

        var User = $resource('/api/users', {}, {
            update: {
                method: 'PUT'
            }
        });

       return User;
    }
}());
