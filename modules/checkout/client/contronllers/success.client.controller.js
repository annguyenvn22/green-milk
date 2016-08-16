(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('SuccessController', SuccessController);

    SuccessController.$inject = ['$state', 'CartMonthlyService', 'CartSingleService'];

    function SuccessController($state, CartMonthlyService, CartSingleService) {
        var vm = this;

        vm.greeting        = 'Bạn đã đặt hàng thành công, nhân viên của Green Milk sẽ liên hện với bạn!!!'
        vm.homepage        = 'Trở về trang chủ';
        vm.shopping        = 'Tiếp tục đặt hàng';
        vm.backToHomepage  = backToHomepage;
        vm.coninueShopping = continueShopping;

        /////////////////

        function backToHomepage() {
            $state.go('homepage');
        }

        function continueShopping() {
            if (/single/.test($state.current.name)) {
                CartSingleService.cleanCart();
            } else {
                CartMonthlyService.cleanCart();
            }
            $state.go('^.^');
        }

    }
}());