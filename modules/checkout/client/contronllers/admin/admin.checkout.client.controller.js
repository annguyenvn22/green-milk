(function() {
    'use strict';

    angular
        .module('checkout.admin')
        .controller('AdminCheckoutManagementController', AdminCheckoutManagementController);

    AdminCheckoutManagementController.$inject = [];

    function AdminCheckoutManagementController() {
        var vm = this;
        
        activate();
        
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
                    { field: 'customerName', displayName:'Tên khách hàng', width: '25%' },
                    { field: 'dateCrated', displayName:'Ngày đặt' },
                    { field: 'checkoutType', displayName: 'Loại đơn hàng', cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.checkoutType === "single" ? "Đặt 1 lần" : "Đặt 1 tháng" }}</div>' },
                    { field: 'detailUrl', displayName: 'Chi tiết', cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref=".detail({id: row.entity.checkoutId})">Chi tiết đơn hàng</a></div>', width: '18%' },
                    { field: 'totalMoney', displayName: 'Tổng tiền', cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.totalMoney | currency : "" : 0 }} đ</div>' },
                    { field: 'checkoutStatus', width: '15%', displayName: 'Tình trạng', cellClass: initCellClass, cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity.checkoutStatus === "resolved" ? "Đã giao" : "Chưa giao hàng" }}</div>'}    
                ],
                data: [
                    {customerName: 'Nguyễn Văn Chúc Ân', dateCrated: '12/12/2016', checkoutType: 'single', totalMoney: 12000, checkoutStatus: 'resolved', checkoutId: 1},   
                    {customerName: 'Hoàng Phước', dateCrated: '12/12/2016', checkoutType: 'monthly', totalMoney: 12000, checkoutStatus: 'penping', checkoutId: 2} ,  
                    {customerName: 'Đăng Minh Đức', dateCrated: '12/12/2016', checkoutType: 'single', totalMoney: 12000, checkoutStatus: 'penping', checkoutId: 3}   
                ]
            }; // End: gridOptions
        } // End: activate()

        /**
         * Used for vm.gridOption, field: checkoutStatus
         */
        function initCellClass(grid, row, col, rowRenderIndex, colRenderIndex) {
            var cellValue = grid.getCellValue(row, col);
            console.log(cellValue)
            if (angular.equals('resolved', cellValue)) {
                return 'bg-resolved';
            } else {
                return 'bg-pending';
            }
        }


    }
}());