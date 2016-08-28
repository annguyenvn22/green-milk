(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('CheckoutDetailController', CheckoutDetailController);

    CheckoutDetailController.$inject = ['$stateParams', 'uiGridConstants'];

    function CheckoutDetailController($stateParams, uiGridConstants) {
        var vm = this;

        activate();

        /////////////


        function activate() {
            vm.customerNameLabel = 'Tên khách hàng: ';
            vm.customerAddressLabel = 'Địa chỉ: ';
            vm.customerPhoneNoLabel = 'SĐT: ';
            vm.totalMoneyLabel = 'Tổng tiền: ';
            vm.statusLabel = 'Tình trạng';
            vm.saveLabel = 'Lưu';
            vm.cancelLabel = 'Hủy';
            vm.releaseDateLabel = 'Ngày giao';
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
    }
}());
