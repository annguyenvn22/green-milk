(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepFourController', StepFourController);

    StepFourController.$inject = ['$state', 'CheckoutService', 'CartSingleService', 'CartMonthlyService'];
    function StepFourController($state, Checkout, CartSingleService, CartMonthlyService) {
        var vm = this;

        activate();

        vm.selectARadio         = selectARadio;
        vm.checkout             = checkout;

        ////////////////

        function activate() {
            vm.isCollapsed          = true;
            vm.title                = 'Bước 4: Hình thức thanh toán';
            vm.payment              = 'cash';
            vm.cashPaymentLabel     = 'Thanh toán bằng tiền mặt';
            vm.ebankingPaymentLabel = 'Thẻ ATM có đăng kí Internet Banking';
            vm.checkoutLabel        = 'Đặt Hàng';
            vm.service = /single/.test($state.current.name) ? CartSingleService : CartMonthlyService;
        }

        function selectARadio() {
            if (vm.payment === 'cash') {
                vm.isCollapsed = true;
            } else {
                vm.isCollapsed = false;
            }
        }

        function checkout() {
            var state    = /single/.test($state.current.name) ? 'single' : 'monthly';
            var checkout = new Checkout({
                type         : state,
                paymentMethod: vm.payment,
                cart         : []
            });

            switch (state) {
                case 'single':
                    checkout.cart = CartSingleService.getCartSingle();
                    break;
                case 'monthly':
                    checkout.cart = CartMonthlyService.getMonth();
                    break;
            }

            checkout.$save(checkoutSuccess, checkoutFailure);
        }

        function checkoutSuccess() {
            $state.go('^.success');
        }

        function checkoutFailure() {
            $state.go('^.failure');
        }

    }
})();