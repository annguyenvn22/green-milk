(function () {
    'use strict';

    angular
        .module('checkout')
        .controller('StepTwoController', StepTwoController);

    StepTwoController.$inject = ['$state', 'CartSingleService', 'CartMonthlyService', '$location', '$anchorScroll', 'Authentication', 'UserService'];
    function StepTwoController($state, CartSingleService, CartMonthlyService, $location, $anchorScroll, Authentication, UserService) {
        var vm = this;

        activate();
        vm.update = update;
        vm.user = Authentication.user;
        vm.next = next;

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
            vm.phoneNumberErrorMsg  = 'Xin vui lòng điền số điện thoại để chúng tôi liên lạc xác minh mua hàng.'
            vm.addressErrorMsg      = 'Xin vui lòng điền địa chỉ để chúng tôi giao hàng đúng nơi';
            vm.successMessage       = 'Cập nhật thông tin thành công';
        }

        function next() {
            $state.go('^.step-three');
        }

        function update() {
            if (vm.isReadonly) {
            } else {
                UserService.update(vm.user,
                    function () {
                        vm.updateSuccessFlag = true;
                        vm.isReadonly = true;
                    });

            }
        }
    }
})();