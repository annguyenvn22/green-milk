(function() {
    'use strict';

    angular
        .module('users.admin')
        .controller('UserManagementController', UserManagementController);
    
    UserManagementController.$inject = [];

    function UserManagementController() {
        var vm = this;

        activate();

        ///////////////

        function activate() {
            
        }
    }
}());