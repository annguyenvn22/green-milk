(function () {
    'use strict';

    angular
        .module('core')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$state'];

    function FooterController($state) {
        var vm = this;

        vm.buttonLabel    = 'Đặt Hàng Ngay';
        vm.copyRight      = '2016 (c) Bản quyền thuộc về Green Milk';
        vm.email          = 'greenmilk.startup@gmail.com';
        vm.goToCartSingle = goToCartSingle;

        //////////////////////////

        function goToCartSingle() {
            $state.go('home.cart.cart-single');
        }
    }
}());