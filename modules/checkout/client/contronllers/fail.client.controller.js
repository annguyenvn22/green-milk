(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('FailController', FailController);

    FailController.$inject = ['$state'];

    function FailController($state) {
        var vm = this;

        vm.greeting = 'Việc đăt hàng không thành công!';
    }
}());