(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepOneController', StepOneController);

    StepOneController.$inject = ['$state', '$location', '$anchorScroll', 'Authentication', '$window', '$cookies', 'CartSingleService', 'CartMonthlyService', 'store'];
    function StepOneController($state, $location, $anchorScroll, Authentication, $window, $cookies, CartSingleService, CartMonthlyService, store) {
        var vm = this;

        activate();

        vm.goToStepTwo    = goToStepTwo;
        vm.callOAuth      = callOAuth;
        vm.Authentication = Authentication;

        ////////////////

        function activate() {

            if (Authentication.user) {
                goToStepTwo();
            }

            $location.hash('document');
            $anchorScroll();
            vm.title                 = 'Bước 1: Đăng Nhập';
            vm.orLabel               = '... Hoặc đăng nhập với:';
            vm.loginWithLabel        = 'Đăng nhập với:';
            vm.loginLabel            = ' Đăng Nhập';
            vm.createNewAccountLabel = ' Chưa có tài khoản?';
            vm.registerWithFacebook  = 'Đăng kí bằng facebook';
            vm.registerWithGoogle    = 'Đăng kí bằng google';
            vm.authError             = {};
            vm.usernamePlaceholderLabel = 'Tên tài khoản';
            vm.passwordPlaceholderLabel = 'Mật khẩu';

        }

        function goToStepTwo() {
            $state.go('^.step-two');
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