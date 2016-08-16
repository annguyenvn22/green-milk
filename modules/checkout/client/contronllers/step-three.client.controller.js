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
                        field: 'price', displayName: 'Giá', type: 'number', cellTemplate: '<div>{{ grid.appScope.$parent.vm.CartMonthlyService.totalWeekMoney() | currency : "" : 0 }} đ</div>'
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
                data: transformMonth(CartMonthlyService.getMonth()),
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


        /**
         * Transfrom *month* object from "tree" structure to "array" structure
         * Because ui.grid's TreeView display base on array and it's $$treeLevel property
         */
        function transformMonth(month) {
            var data = [];
            
            // interating weeks
            for (var i = 0, _week; i < month.length; i++) {
                _week = month[i];
                var week = {
                    $$treeLevel: 0,
                    name: 'Tuần ' + (i + 1),
                    amount: CartMonthlyService.totalWeekAmount(_week),
                    price: CartMonthlyService.totalWeekMoney(_week)
                };
                data.push(week);

                // iteration days in a week
                for (var _day in _week) {
                    if (angular.isDefined(_week[_day]) && angular.isDefined(_week[_day].bottles)) {
                        var day = {
                            $$treeLevel: 1,
                            name: translateToVietnamese(_day),
                            amount: CartMonthlyService.totalDayAmount(_week[_day]),
                            price: CartMonthlyService.totalDayMoney(_week[_day])
                        }
                        data.push(day);

                        // pushing bottles
                        angular.forEach(_week[_day].bottles, function(_bottle) {
                            var bottle = {
                                $$treeLevel: 2,
                                name: _bottle.name,
                                price: _bottle.price,
                                amount: _bottle.amount
                            }
                            data.push(bottle);
                        });

                    }
                }
            }

            return data;
        }

        function translateToVietnamese(day) {
            switch(day) {
                case 'monday':
                    return 'Thứ Hai';
                case 'tuesday':
                    return 'Thứ Ba';
                case 'wednesday':
                    return 'Thứ Tư';
                case 'thursday':
                    return 'Thứ Năm';
                case 'friday':
                    return 'Thứ Sáu';
                case 'saturday':
                    return 'Thứ Bảy';
                case 'sunday':
                    return 'Chủ Nhật';
            }
        }

        function backToStepTwo() {
            $state.go('^.step-two');
        }

        function goToStepFour() {
            $state.go('^.step-four');
        }

    } // end StepThreeController
})();