(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepTwoController', StepTwoController);

    StepTwoController.$inject = ['$state', 'CartSingleService', 'CartMonthlyService', '$location', '$anchorScroll', 'Authentication'];
    function StepTwoController($state, CartSingleService, CartMonthlyService, $location, $anchorScroll, Authentication) {
        var vm = this;

        activate();
        vm.updateOrNext = updateOrNext;
        vm.user = Authentication.user;

        ///////////////////

        function activate() {
            if (!Authentication.user) {
                $state.go('^.step-one');
            }
            vm.isReadonly           = true;
            vm.title                = 'Bước 2: Địa chỉ giao hàng';
            vm.header               = 'Giao đến địa chỉ này';
            vm.editLabel            = 'Sửa';
            vm.updateAddressLabel   = 'Cập nhật địa chỉ giao hàng';
            vm.displayNameLabel     = 'Họ và tên';
            vm.cancelLabel          = 'Hủy Bỏ';
            vm.updateLabel          = 'Cập Nhật';
            vm.addressLabel         = 'Địa chỉ: ';
            vm.phoneNumberLabel     = 'SĐT: ';
            vm.service              = /single/.test($state.current.name) ? vm.service = CartSingleService : vm.service = CartMonthlyService;
            vm.notEditUserException = 'Hãy sửa thông tin để chúng tôi liên lạc dễ dàng bạn nhé :)';
        }

        function updateOrNext() {
            if (vm.isReadonly) {
                $state.go('^.step-three');
            } else {
            // TODO call server api to update info
                
            }
        }
    }
})();