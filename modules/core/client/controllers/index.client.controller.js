(function() {
    'use strict';

    angular
        .module('core')
        .controller('IndexController', IndexController);

    IndexController.$inject = [];

    function IndexController() {
        var vm = this;

        activate();

        //////////////

        function activate() {
            vm.carouselTemplate = 'core/client/views/carousel';
            vm.reasonTemplate = 'core/client/views/reason';
            vm.productTemplate = 'core/client/views/product';
            vm.memberTemplate = 'core/client/views/member';
        }
    }
}());
