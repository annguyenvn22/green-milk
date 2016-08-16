(function () {
    'use strict';

    angular
        .module('checkout.routes')
        .config(configFn);

    configFn.$inject = ['$stateProvider'];
    function configFn($stateProvider) {
        $stateProvider

        // Cart Monthly
            .state('cart.cart-monthly.checkout', {
                abstract: true,
                url     : '/thanh-toan'
            })
            .state('cart.cart-monthly.checkout.step-one', {
                url  : '/buoc-mot',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-one',
                        controller  : 'StepOneController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-monthly.checkout.step-two', {
                url  : '/buoc-hai',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-two',
                        controller  : 'StepTwoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-monthly.checkout.step-three', {
                url  : '/buoc-ba',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-three',
                        controller  : 'StepThreeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-monthly.checkout.step-four', {
                url  : '/buoc-bon',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-four',
                        controller  : 'StepFourController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-monthly.checkout.success', {
                url  : '/thanh-cong',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/success',
                        controller  : 'SuccessController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-monthly.checkout.fail', {
                url  : '/that-bai',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-monthly-aside',
                        controller  : 'CartMonthlyAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/fail',
                        controller  : 'FailController',
                        controllerAs: 'vm'
                    }
                }
            })

            // End Cart Monthly


            // Cart Single
            .state('cart.cart-single.checkout', {
                abstract: true,
                url     : '/thanh-toan'
            })
            .state('cart.cart-single.checkout.step-one', {
                url  : '/buoc-mot',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-one',
                        controller  : 'StepOneController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-single.checkout.step-two', {
                url  : '/buoc-hai',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-two',
                        controller  : 'StepTwoController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-single.checkout.step-three', {
                url  : '/buoc-ba',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-three',
                        controller  : 'StepThreeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-single.checkout.step-four', {
                url  : '/buoc-bon',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/step-four',
                        controller  : 'StepFourController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-single.checkout.success', {
                url  : '/than-cong',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/success',
                        controller  : 'SuccessController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('cart.cart-single.checkout.fail', {
                url  : '/that-bai',
                views: {
                    'aside@cart'  : {
                        templateUrl : 'cart/client/views/cart-single-aside',
                        controller  : 'CartSingleAsideController',
                        controllerAs: 'vm'
                    },
                    'content@cart': {
                        templateUrl : 'checkout/client/views/fail',
                        controller  : 'FailController',
                        controllerAs: 'vm'
                    }
                }
            }); // End Cart Single
    }
}());