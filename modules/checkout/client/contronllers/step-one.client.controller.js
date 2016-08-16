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

        }

        function goToStepTwo() {
            $state.go('^.step-two');
        }

        function saveCartToCookies() {
            var isSingle = /single/.test($state.current.name);
            if (isSingle) {
                store.set('single', CartSingleService.getCartSingle());
            } else {
                store.set('monthly', CartMonthlyService.getMonth());
            }
        }

        function callOAuth(url) {
            // save cart object to cookies
            saveCartToCookies();


            var currentHref = $state.href($state.current, $state.current.data);
            url += '?redirect_to=' + encodeURIComponent(currentHref);

            // Effectively call OAuth authentication route:
            $window.location.href = url;
        }
    }
})();