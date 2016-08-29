(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('CheckoutDetailController', CheckoutDetailController);

    CheckoutDetailController.$inject = ['$stateParams', 'uiGridConstants', 'CartMonthlyService', 'CartSingleService', 'CheckoutService'];

    function CheckoutDetailController($stateParams, uiGridConstants, CartMonthlyService, CartSingleService, CheckoutService) {
        var vm = this;

        activate();

        vm.classifiesCheckoutType = classifiesCheckoutType;

        /////////////


        function activate() {
            vm.customerNameLabel = 'Tên khách hàng ';
            vm.customerAddressLabel = 'Địa chỉ ';
            vm.customerPhoneNoLabel = 'SĐT ';
            vm.totalMoneyLabel = 'Tổng tiền ';
            collectInfomation();
            vm.service = CartMonthlyService;
        }

        /**
         * @return 'monthly' or 'single'
         */
        function classifiesCheckoutType() {
            // get from server
            vm.checkout = CheckoutService.queryMock();

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
            vm.statusLabel = 'Tình trạng';
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
                        cellTemplate: '<div>{{ grid.appScope.$parent.vm.CartMonthlyService.totalWeekMoney() | currency : "" : 0 }} đ</div>'
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
            vm.gridOptions = {
                showColumnFooter: true,
                data: CartMonthlyService.transformMonth(vm.checkout.cart),
                showTreeExpandNoChildren: false,
                columnDefs: [
                    {
                        field: 'name', displayName: 'Tên Sữa'
                    },
                    {
                        field: 'amount', displayName: 'Số Lượng'
                    },
                    {
                        field: 'price', displayName: 'Giá', cellTemplate: '<div>{{ row.entity.price | currency : "" : 0 }} đ</div>'
                    },
                    {
                        name: 'totalPrice', 
                        displayName: 'Thành tiền', 
                        type: 'number', 
                        aggregationType: uiGridConstants.aggregationTypes.sum, 
                        cellTemplate: '<div>{{ row.treeLevel === 0 || row.treeLevel === 1 ?row.entity.price : row.entity.price * row.entity.amount  | currency : "" : 0 }} đ</div>', 
                        footerCellTemplate: '<div>Tổng Tiền: {{ grid.appScope.$parent.vm.service.totalMoney() | currency : "" : 0 }} đ</div>'
                    },
                    {
                        field: 'status',
                        displayName: 'Đã giao',
                        width: '10%',
                        cellTemplate: '<div><input ng-if="COL_FIELD" type="checkbox" ng-model="MODEL_COL_FIELD" ng-true-value="\'resolved\'" ng-false-value="\'pending\'" /></div>'
                    }

                ]
            };
        }
    }
}());
