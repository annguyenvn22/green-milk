(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('CheckoutDetailController', CheckoutDetailController);

    CheckoutDetailController.$inject = ['$stateParams', 'uiGridConstants', 'CartMonthlyService', 'CartSingleService', 'CheckoutAdminService', '$uibModal'];

    function CheckoutDetailController($stateParams, uiGridConstants, CartMonthlyService, CartSingleService, CheckoutAdminService, $uibModal) {
        var vm = this;

        activate();

        vm.classifiesCheckoutType = classifiesCheckoutType;
        vm.rejectCheckout = rejectCheckout;
        vm.CartMonthlyService = CartMonthlyService;

        /////////////


        function activate() {
            vm.panelTitle = 'Thông tin đơn hàng';
            vm.isCollapse = false;
            vm.dateCreated = 'Ngày đặt hàng';
            vm.customerNameLabel = 'Tên khách hàng ';
            vm.customerAddressLabel = 'Địa chỉ ';
            vm.customerPhoneNoLabel = 'SĐT ';
            vm.totalMoneyLabel = 'Tổng tiền ';
            vm.statusLabel = 'Tình trạng';
            vm.weekLabel = 'Tuần';
            vm.rejectLabel = 'Hủy đơn hàng';
            collectInfomation();
        }

        /**
         * @return 'monthly' or 'single'
         */
        function classifiesCheckoutType() {
            // get from server
            vm.checkout = CheckoutAdminService.queryMock();

            return vm.checkout.type;
        }

        function collectInfomation() {
            if (angular.equals(classifiesCheckoutType(), 'single')) {
                collectSingleInformation();
            } else {
                collectMonthlyInformation();
            }
        }

        /**
         * Collect detail for checkout type single
         */
        function collectSingleInformation() {
            vm.saveLabel = 'Lưu';
            vm.cancelLabel = 'Hủy';
            vm.releaseDateLabel = 'Ngày giao';
            vm.datepicker = {
                isOpen: false,
                format: 'dd/MM/yyyy',
                closeText: 'Đóng',
                currentText: 'Hôm nay',
                clearText: "Xóa"
            };
            vm.options = [
                {display: 'Đã giao', value: 'resovled'},
                {display: 'Chưa giao', value: 'pending'}
            ];
            vm.statusDefault = vm.options[1];
            vm.gridOptions = {
                showColumnFooter: true,
                data: [],
                columnDefs: [{
                        field: 'index',
                        displayName: '#',
                        width: '10%',
                        cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row) + 1}}</div>'
                    }, {
                        field: 'name',
                        displayName: 'Tên Sữa'
                    }, {
                        field: 'amount',
                        displayName: 'Số Lượng'
                    }, {
                        field: 'price',
                        displayName: 'Giá',
                        type: 'number',
                        cellTemplate: '<div>{{ grid.appScope.$parent.vm.CartSingleService.totalWeekMoney() | currency : "" : 0 }} đ</div>'
                    }, {
                        name: 'totalPrice',
                        displayName: 'Thành tiền',
                        type: 'number',
                        aggregationType: uiGridConstants.aggregationTypes.sum,
                        cellTemplate: '<div>{{ row.entity.price * row.entity.amount  | currency : "" : 0 }} đ</div>',
                        footerCellTemplate: '<div>Tổng Tiền: {{ grid.appScope.$parent.vm.service.totalMoney() | currency : "" : 0 }} đ</div>'
                    }

                ]
            };
        }

        /**
         * Collect detail for checkout type monthly
         */
        function collectMonthlyInformation() {
            vm.unit = 'chai';
            vm.resolvedBottleLabel = 'Đã giao';
            vm.resolvedBottles = CheckoutAdminService.totalResovledMilkBottles(vm.checkout.cart); 
            vm.totalBottles = CheckoutAdminService.totalAmount(vm.checkout.cart)
            vm.CheckoutAdminService = CheckoutAdminService;
            vm.gridOptions = {
                showColumnFooter: true,
                data: CartMonthlyService.transformMonth(vm.checkout.cart),
                showTreeExpandNoChildren: false,
                columnDefs: [
                    {
                        field: 'name', displayName: 'Tên Sữa'
                    },
                    {
                        field: 'amount',
                        displayName: 'Số Lượng',
                        footerCellTemplate: '<div>Tổng số chai: {{ grid.appScope.$parent.vm.CheckoutAdminService.totalAmount(grid.appScope.$parent.vm.checkout.cart) }}</div>'
                    },
                    {
                        name: 'totalPrice', 
                        displayName: 'Thành tiền', 
                        type: 'number', 
                        aggregationType: uiGridConstants.aggregationTypes.sum, 
                        cellTemplate: '<div>{{ row.treeLevel === 0 || row.treeLevel === 1 ?row.entity.price : row.entity.price * row.entity.amount  | currency : "" : 0 }} đ</div>', 
                        footerCellTemplate: '<div>Tổng Tiền: {{ grid.appScope.$parent.vm.CheckoutAdminService.totalMoney(grid.appScope.$parent.vm.checkout.cart) | currency : "" : 0 }} đ</div>'
                    },
                    {
                        field: 'status',
                        displayName: 'Đã giao',
                        width: '10%',
                        cellTemplate: '<div class="text-center"><input ng-if="COL_FIELD" type="checkbox" ng-model="MODEL_COL_FIELD" ng-true-value="\'resolved\'" ng-false-value="\'pending\'" /></div>'
                    }

                ]
            };
        } // End: collectMonthlyInformation


        function rejectCheckout() {
            event.preventDefault();
            var deleteCheckoutModal = $uibModal.open({
                ariaDescribedBy: 'delete-checkout-modal-label ',
                ariaLabelledBy: 'delete-checkout-modal-body',
                templateUrl: 'checkout/client/views/admin/delete-checkout-modal',
                controller: 'DeleteCheckoutController',
                controllerAs: 'vm',
                size: 'md'
            });


            deleteCheckoutModal.result
                .then(function(){
                    alert('delete');
                }, function() {
                    alert('cancel');
                });


        }


    } // // End: CheckoutDetailController
}());
