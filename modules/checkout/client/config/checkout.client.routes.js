(function () {
    'use strict';

    angular
        .module('checkout.routes')
        .config(configFn);

    configFn.$inject = ['$stateProvider', 'storeProvider'];
    function configFn($stateProvider, storeProvider) {
        // Change default localStorage to sessionStorage
        storeProvider.setStore('sessionStorage');

        $stateProvider

        // Cart Monthly
            .state('home.cart.cart-monthly.checkout', {
                abstract: true,
                url     : '/thanh-toan'
            })
            .state('home.cart.cart-monthly.checkout.step-one', {
                url  : '/buoc-mot',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-one',
                        controller  : 'StepOneController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-monthly.checkout.step-two', {
                url  : '/buoc-hai',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-two',
                        controller  : 'StepTwoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-monthly.checkout.step-three', {
                url  : '/buoc-ba',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-three',
                        controller  : 'StepThreeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-monthly.checkout.step-four', {
                url  : '/buoc-bon',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-four',
                        controller  : 'StepFourController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-monthly.checkout.success', {
                url  : '/thanh-cong',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/success',
                        controller  : 'SuccessController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-monthly.checkout.fail', {
                url  : '/that-bai',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/fail',
                        controller  : 'FailController',
                        controllerAs: 'vm'
                    }
                }
            })

            // End Cart Monthly


            // Cart Single
            .state('home.cart.cart-single.checkout', {
                abstract: true,
                url     : '/thanh-toan'
            })
            .state('home.cart.cart-single.checkout.step-one', {
                url  : '/buoc-mot',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-one',
                        controller  : 'StepOneController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-single.checkout.step-two', {
                url  : '/buoc-hai',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-two',
                        controller  : 'StepTwoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-single.checkout.step-three', {
                url  : '/buoc-ba',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-three',
                        controller  : 'StepThreeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-single.checkout.step-four', {
                url  : '/buoc-bon',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/step-four',
                        controller  : 'StepFourController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-single.checkout.success', {
                url  : '/than-cong',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/success',
                        controller  : 'SuccessController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.cart.cart-single.checkout.fail', {
                url  : '/that-bai',
                views: {
                    'aside@home.cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@home.cart': {
                        templateUrl : 'checkout/client/views/fail',
                        controller  : 'FailController',
                        controllerAs: 'vm'
                    }
                }
            }); // End Cart Single
    }
}());