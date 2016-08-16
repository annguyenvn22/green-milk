(function () {
    'use strict';

    angular
        .module('cart.cart-single')
        .controller('CartSingleAsideController', CartSingleAsideController);

    CartSingleAsideController.$inject = ['CartSingleService', '$state', 'CartMonthlyService'];
    function CartSingleAsideController(CartSingleService, $state, CartMonthlyService) {
        var vm = this;

        activate();

        vm.remove             = remove;
        vm.checkout           = checkout;
        vm.CartSingleService  = CartSingleService;
        vm.products           = CartSingleService.getCartSingle();


        ////////////////

        function activate() {
            vm.total              = 'Tổng Tiền';
            vm.logo               = {
                img: 'modules/cart/client/img/cart-logo.png',
                alt: 'cart-logo'
            }
            vm.service = /single/.test($state.current.name) ? vm.service = CartSingleService : vm.service = CartMonthlyService;
            vm.isNotInCheckoutStates = !/checkout/.test($state.current.name);
        }

        function remove(product) {
            CartSingleService.removeFromCartSingle(product);
        }

        function checkout() {
            $state.go('.checkout.step-one');
        }

    }
})();