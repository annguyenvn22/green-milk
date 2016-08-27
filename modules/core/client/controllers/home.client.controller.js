(function() {
    'use strict';

    angular
        .module('core')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        activate();

        //////////////

        function activate() {
            vm.navbarTemplate = 'core/client/views/navbar';
            vm.footerTemplate = 'core/client/views/footer';
        }
    }
}());
