(function() {
    'use strict';

    angular
        .module('core')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['store', 'Authentication', 'CartSingleService', 'CartMonthlyService', '$state'];

    function IndexController(store, Authentication, CartSingleService, CartMonthlyService, $state) {
        var vm = this;

        activate();

        //////////////

        function activate() {
            checkingCheckoutInSessionStorage();
            vm.carouselTemplate = 'core/client/views/carousel';
            vm.reasonTemplate = 'core/client/views/reason';
            vm.productTemplate = 'core/client/views/product';
            vm.memberTemplate = 'core/client/views/member';

        }

        function checkingCheckoutInSessionStorage() {
            var checkout = store.get('checkout');

            if (Authentication.user && checkout) {
                if (typeof checkout != 'array') {
                    CartSingleService.setCartSingle(checkout);
                    store.remove('checkout');
                    $state.go('^.cart.cart-single.checkout.step-two');
                } else {
                    // TODO
                    console.error('not implement yet')
                }
            }

        }
    }
}());
