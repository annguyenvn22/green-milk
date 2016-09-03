(function() {
    'use strict';

    angular
        .module('checkout')
        .controller('StepThreeController', StepThreeController);

    StepThreeController.$inject = ['$state', 'CartSingleService', 'CartMonthlyService', 'uiGridConstants'];
    function StepThreeController($state, CartSingleService, CartMonthlyService, uiGridConstants) {
        var vm = this;

        activate();

        vm.backToStepTwo = backToStepTwo;
        vm.goToStepFour = goToStepFour;
        vm.CartMonthlyService = CartMonthlyService;

        ////////////////

        function activate() {
            vm.title = 'Bước 3: Xem lại đơn hàng'
            vm.gridOptions = getGridOptions();
            vm.nextLabel = 'Thanh toán';
            vm.backLabel = 'Bước 2';
        }

        function getGridOptions() {
            vm.STATE = /single/.test($state.current.name) ? 'single' : 'monthly';
            if (vm.STATE === 'single') {
                vm.service = CartSingleService;
                return getSingleGridOptions();
            } else {
                vm.service = CartMonthlyService;
                return getMonthlyGridOptions();
            }
        }

        function getSingleGridOptions() {
            return {
                showColumnFooter: true,
                data: CartSingleService.getCartSingle(),
                columnDefs: [
                    {
                        field: 'index', displayName: '#', width: '10%', cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row) + 1}}</div>'
                    },
                    {
                        field: 'name', displayName: 'Tên Sữa'
                    },
                    {
                        field: 'amount', displayName: 'Số Lượng'
                    },
                    {
                        field: 'price', displayName: 'Giá', type: 'number', cellTemplate: '<div>{{ grid.appScope.$parent.vm.CartSingleService.totalWeekMoney() | currency : "" : 0 }} đ</div>'
                    },
                    {
                        name: 'totalPrice', displayName: 'Thành tiền', type: 'number', aggregationType: uiGridConstants.aggregationTypes.sum, cellTemplate: '<div>{{ row.entity.price * row.entity.amount  | currency : "" : 0 }} đ</div>', footerCellTemplate: '<div>Tổng Tiền: {{ grid.appScope.$parent.vm.service.totalMoney() | currency : "" : 0 }} đ</div>'
                    }
                    
                ]
            };
        }

        function getMonthlyGridOptions() {
            return {
                showColumnFooter: true,
                data: CartMonthlyService.transformMonth(CartMonthlyService.getMonth()),
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
                        name: 'totalPrice', displayName: 'Thành tiền', type: 'number', aggregationType: uiGridConstants.aggregationTypes.sum, cellTemplate: '<div>{{ row.treeLevel === 0 || row.treeLevel === 1 ?row.entity.price : row.entity.price * row.entity.amount  | currency : "" : 0 }} đ</div>', footerCellTemplate: '<div>Tổng Tiền: {{ grid.appScope.$parent.vm.service.totalMoney() | currency : "" : 0 }} đ</div>'
                    }

                ]
            };
        }

        function backToStepTwo() {
            $state.go('^.step-two');
        }

        function goToStepFour() {
            $state.go('^.step-four');
        }

    } // End: StepThreeController
})();