(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('DeleteCheckoutController', DeleteCheckoutController);

    DeleteCheckoutController.$inject = ['$uibModalInstance'];

    function DeleteCheckoutController($uibModalInstance) {
        var vm = this;

        vm.confirmDelete = confirmDelete;
        vm.confirmCancel = confirmCancel;

        activate();

        ////////////////

        function activate() {
            vm.deleteCheckoutLabel = 'Xóa đơn hàng';
            vm.deleteCheckoutMessage = 'Bạn có chắc là muốn xóa đơn hàng số 113?';
            vm.deleteButtonLabel = 'Xóa';
            vm.cancelButtonLabel = 'Hủy';
        }

        function confirmDelete() {
            $uibModalInstance.close('delete');
        }

        function confirmCancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }
}());