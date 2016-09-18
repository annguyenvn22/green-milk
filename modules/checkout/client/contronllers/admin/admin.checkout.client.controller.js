(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('AdminCheckoutManagementController', AdminCheckoutManagementController);

    AdminCheckoutManagementController.$inject = ['CheckoutAdminService'];

    function AdminCheckoutManagementController(CheckoutAdminService) {
        var vm = this;
        
        activate();
        console.log(CheckoutAdminService.query());
        
        ///////////
        
        function activate() {
            vm.chartSingle = {
               data: [20, 3],
               options: {
                    title: {
                        display: true,
                        text: 'Đơn hàng đặt 1 lần hôm nay',
                        position: 'bottom'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
               },
               labels: ['Chưa giao', 'Đã giao']
            }; // End: chartSingle
            
            vm.chartMonthly = {
               data: [20, 10],
               options: {
                    title: {
                        display: true,
                        text: 'Đơn hàng đặt 1 tháng hôm nay',
                        position: 'bottom'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
               },
               labels: ['Chưa giao', 'Đã giao']
            }; // End: chartSingle
            
            vm.checkoutLabel = 'Đơn hàng';
            vm.gridOptions = {
                columnDefs: [
                    { field: 'index', displayName: '#', width: '5%', cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row) + 1}}</div>'},
                    { field: 'displayName', displayName:'Tên khách hàng', width: '25%' },
                    { field: 'dateCrated', displayName:'Ngày đặt' },
                    { field: 'checkoutType', displayName: 'Loại đơn hàng', cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.checkoutType === "single" ? "Đặt 1 lần" : "Đặt 1 tháng" }}</div>' },
                    { field: 'detailUrl', displayName: 'Chi tiết', cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref=".detail({id: row.entity.checkoutId})">Chi tiết đơn hàng</a></div>', width: '18%' },
                    { field: 'totalMoney', displayName: 'Tổng tiền', cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.totalMoney | currency : "" : 0 }} đ</div>' },
                    { field: 'checkoutStatus', width: '15%', displayName: 'Tình trạng', cellClass: initCellClass, cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.checkoutStatus === "resolved" ? "Đã giao" : "Chưa giao hàng" }}</div>'}    
                ],
                data: CheckoutAdminService.query()
            }; // End: gridOptions
        } // End: activate()

        /**
         * Used for vm.gridOption, field: checkoutStatus
         */
        function initCellClass(grid, row, col, rowRenderIndex, colRenderIndex) {
            var cellValue = grid.getCellValue(row, col);
            if (angular.equals('resolved', cellValue)) {
                return 'bg-resolved';
            } else {
                return 'bg-pending';
            }
        }


    }
}());