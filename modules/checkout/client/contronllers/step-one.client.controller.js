(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepOneController', StepOneController);

    StepOneController.$inject = ['$state', '$location', '$anchorScroll', 'Authentication', '$window', '$cookies', 'CartSingleService', 'CartMonthlyService', 'store'];
    function StepOneController($state, $location, $anchorScroll, Authentication, $window, $cookies, CartSingleService, CartMonthlyService, store) {
        var vm = this;

        activate();

        vm.callOAuth      = callOAuth;
        vm.Authentication = Authentication;

        ////////////////

        function activate() {

            if (Authentication.user) {
                goToStepTwo();
            }
            vm.title = 'Bước 1: Đăng nhập';
            vm.loginWithFacebook  = 'Đăng nhập bằng facebook';
            vm.loginWithGoogle    = 'Đăng nhập bằng google';

        }

        function storeCart() {
            var isSingle = /single/.test($state.current.name);
            if (isSingle) {
                store.set('checkout', {
                    type: 'single',
                    cart: CartSingleService.getCartSingle()
                });
            } else {
                store.set('checkout', {
                    type: 'monthly',
                    cart: CartMonthlyService.getMonth()
                });
            }
        }

        function callOAuth(url) {
            // save cart object to cookies
            storeCart();


            var currentHref = $state.href($state.current, $state.current.data);
            url += '?redirect_to=' + encodeURIComponent(currentHref);

            // Effectively call OAuth authentication route:
            $window.location.href = url;
        }
    }
})();