(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepTwoController', StepTwoController);

    StepTwoController.$inject = ['$state', 'CartSingleService', 'CartMonthlyService', '$location', '$anchorScroll'];
    function StepTwoController($state, CartSingleService, CartMonthlyService, $location, $anchorScroll) {
        var vm = this;

        activate();

        vm.goToStepThree    = goToStepThree;
        vm.updateCustomerInfo = updateCustomerInfo;
        vm.scrollDown = scrollDown;

        ///////////////////

        function activate() {
            scrollUp();
            vm.isCollapsed      = true;
            vm.title            = 'Bước 2: Địa chỉ giao hàng';
            vm.header           = 'Giao đến địa chỉ này';
            vm.edit             = 'Sửa';
            vm.updateAddress    = 'Cập nhật địa chỉ giao hàng';
            vm.cancelLabel      = 'Hủy Bỏ';
            vm.updateLabel      = 'Cập Nhật';
            vm.addressLabel     = 'Địa chỉ: ';
            vm.phoneNumberLabel = 'SĐT: ';
            vm.customer         = {
                fullName   : 'Họ Tên của bạn',
                address    : 'Địa chỉ cụ thể của bạn để chúng tôi có thể giao hàng đúng nơi',
                phoneNumber: 'Số điện thoại của bạn để chúng tôi có thể liên lạc'
            };
            vm.customerBackup = angular.copy(vm.customer);
            vm.customerEdit = angular.copy(vm.customer);
            vm.service = /single/.test($state.current.name) ? vm.service = CartSingleService : vm.service = CartMonthlyService;
            vm.notEditUserException = 'Hãy sửa thông tin để chúng tôi liên lạc dễ dàng bạn nhé :)';
            vm.notEditedYet = angular.equals(vm.customerBackup, vm.customerEdit);
        }

        function scrollUp() {
            $location.hash('document');
            $anchorScroll();
        }

        function goToStepThree() {
            $state.go('^.step-three');
        }

        function updateCustomerInfo() {
            // TODO call server api to update info
            vm.customer = angular.copy(vm.customerEdit);
            vm.notEditedYet = angular.equals(vm.customerBackup, vm.customerEdit);
            vm.isCollapsed = true;
             scrollUp();
        }

        function scrollDown() {
            $location.hash('update-user-info');
            $anchorScroll();
        }
    }
})();