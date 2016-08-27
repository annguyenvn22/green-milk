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
            adjustBodyElementPadding();
            vm.navbarTemplate = 'core/client/views/navbar';
            vm.footerTemplate = 'core/client/views/footer';
        }

        // remove 10px padding top of body element
        function adjustBodyElementPadding() {
            jQuery('body').removeClass('padding-top-admin-page')
        }
    }
}());
