(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('EmptyCartController', EmptyCartController);

    EmptyCartController.$inject = ['$state'];
    function EmptyCartController($state) {
        var vm = this;


        activate();

        vm.goToCart = goToCart;

        ////////////////

        function activate() {
            vm.cartEmptyException = 'Hiện tại giỏ hàng của bạn đang trống, xin hãy đặt hàng';
            vm.cartSingleLabel = 'Đặt 1 lần';
            vm.cartMonthlyLabel = 'Đặt 1 tháng';

        }

        function goToCart(type) {
            switch(type) {
                case 'single':
                    return $state.go('cart.cart-single');
                case 'monthly':
                    return $state.go('cart.cart-monthly');
            }
        }
    }
})();