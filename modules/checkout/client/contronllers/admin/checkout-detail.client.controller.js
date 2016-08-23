(function() {
    'use strict';
    
    angular
        .module('checkout.admin')
        .controller('CheckoutDetailController', CheckoutDetailController);
        
    CheckoutDetailController.$inject = ['$stateParams'];
    
    function CheckoutDetailController($stateParams) {
        console.log($stateParams.id)
    }
}());