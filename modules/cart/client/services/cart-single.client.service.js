(function () {
    'use strict';

    angular
        .module('cart.cart-single.services')
        .service('CartSingleService', CartSingleService);

    CartSingleService.$inject = ['$resource', 'CartService'];
    function CartSingleService($resource, CartService) {

        var products   = [];
        var cartSingle = [];

        this.getMilkBottles       = CartService.getMilkBottles;
        this.getCartSingle        = getCartSingle;
        this.setCartSingle        = setCartSingle;
        this.addToCartSingle      = addToCartSingle;
        this.removeFromCartSingle = removeFromCartSingle;
        this.isEmpty              = isEmpty;
        this.cleanCart            = cleanCart;
        this.totalMoney           = totalMoney;

        //////////////////


        /*
         Add a product to cart (single)
         Check the product before 'push'
         if existed => increase amount
         */
        function addToCartSingle(product) {
            var isDuplicated = false;
            for (var i in cartSingle) {
                if (cartSingle[i].name === product.name) {
                    cartSingle[i].amount += product.amount;
                    isDuplicated = true;
                }
            }
            if (!isDuplicated) {
                cartSingle.push(angular.copy(product));
            }
        }


        function getCartSingle() {
            return cartSingle;
        }

        /**
         * Remove a product
         *
         */
        function removeFromCartSingle(product) {
            for (var i in cartSingle) {
                if (cartSingle[i].name === product.name) {
                    cartSingle.splice(i, 1);
                    break;
                }
            }
        }

        function isEmpty() {
            return cartSingle.length == 0;
        }

        function cleanCart() {
            cartSingle = [];
        }

        /**
         * Calculate sum for cart
         */
        function totalMoney() {
            var totalMoney = 0;
            for (var i in cartSingle) {
                totalMoney += cartSingle[i].amount * cartSingle[i].price;
            }

            return totalMoney;
        }

        function setCartSingle(cart) {
            cartSingle = cart;
        }

    }
})();