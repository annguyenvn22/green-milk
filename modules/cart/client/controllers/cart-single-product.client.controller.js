(function () {
    'use strict';

    angular
        .module('cart.cart-single')
        .controller('CartSingleProductController', CartSingleProductController);

    CartSingleProductController.$inject = ['CartSingleService'];
    function CartSingleProductController(CartSingleService) {
        var vm = this;

        vm.products          = CartSingleService.getMilkBottles();
        vm.CartSingleService = CartSingleService;
        vm.buttonLabel       = 'Thêm vào giỏ hàng';

        ////////////////

    }
})();