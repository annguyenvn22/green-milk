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
            vm.chartData = [20, 3];
            vm.chartLabels = ['Chưa giao', 'Đã giao'];
            vm.chartOptions = {
                title: {
                    display: true,
                    text: 'Tình trạng đơn hàng',
                    position: 'bottom'
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            };
        }
    }
}());