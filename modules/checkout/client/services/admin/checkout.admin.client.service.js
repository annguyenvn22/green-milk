(function () {
    'use strict';

    angular
        .module('checkout.admin.services')
        .factory('CheckoutAdminService', CheckoutAdminService);

    CheckoutAdminService.$inject = ['$resource', 'CartMonthlyService'];
    function CheckoutAdminService($resource, CartMonthlyService) {

        var Checkout = $resource('/api/checkouts/:id', {}, {
            totalAmount: totalAmount,
            totalMoney: totalMoney,
            totalResovledMilkBottles: totalResovledMilkBottles
        });

        return Checkout;

        ////////////////


        function totalMoney(month) {
            // TODO just for test, need to implement for cart single too
            return CartMonthlyService.totalMoney(month);
        }


        function totalAmount(month) {
            // TODO just for test, need to implement for cart single too
            return CartMonthlyService.totalAmount(month);
        }

        function totalResovledMilkBottles(month) {
            var total = 0;
            angular.forEach(month, function iterateMonth(week, index, month) {
                if (angular.isObject(week) && !angular.isArray(week)) {
                    total += totalWeekResovedMilkBottle(week);
                }
            });

            return total;
        }


        function totalWeekResovedMilkBottle(week) {
            var total = 0;
            angular.forEach(week, function (day) {
                if (angular.isDefined(day) && angular.isDefined(day.bottles)) {
                    if (angular.equals(day.status, 'resolved')) {
                        total += day.bottles.length;
                    }
                }
            })

            return total;
        }

    }
})();