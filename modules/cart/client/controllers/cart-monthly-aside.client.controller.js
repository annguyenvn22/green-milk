(function () {
    'use strict';

    angular
        .module('cart.cart-monthly')
        .controller('CartMonthlyAsideController', CartMonthlyAsideController);

    CartMonthlyAsideController.$inject = ['CartMonthlyService'];

    function CartMonthlyAsideController(CartMonthlyService) {
        var vm = this;

        vm.header = 'Sản Phẩm';
        vm.milks  = CartMonthlyService.getMilkBottles();
    }
})();