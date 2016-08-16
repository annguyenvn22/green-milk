(function () {
    'use strict';

    angular
        .module('cart.cart-monthly')
        .controller('CartMonthlyAweekController', CartMonthlyAweekController);

    CartMonthlyAweekController.$inject = ['$state', 'CartMonthlyService'];
    function CartMonthlyAweekController($state, CartMonthlyService) {
        var vm = this;

        vm.month              = CartMonthlyService.getMonth();
        vm.CartMonthlyService = CartMonthlyService;
        vm.onDropCallBack     = onDropCallBack;
        vm.removeBottle       = removeBottle;
        vm.select             = select;
        vm.checkout           = checkout;

        //////////////////////////////////////////////

        /**
         * Callback method to be invoked a draggable is dropped into the droppable
         */
        function onDropCallBack(event, ui, dayOfWeek) {
            checkDroppedBottle(dayOfWeek.bottlesTmp, dayOfWeek.bottles);
            checkGreyBg(dayOfWeek);

        }

        /**
         * Check dropped bottle
         * => new bottle -> add to day of week
         * => existed bottle -> increase amount
         * @bottlesTmp array that stores bottles dragged from 'aside'
         * @bottles array that stores bottles will display
         */
        function checkDroppedBottle(bottlesTmp, bottles) {
            // the bottle dragged from aside
            var aBottleTmp = bottlesTmp.pop();
            // I don't want use 'aBottleTmp' which refer to 'aside'
            // I want to use new one -> use angualr.copy()
            var aBottleOfMilk = angular.copy(aBottleTmp);
            var currentBottle;
            var bottlesLength = bottles.length;
            var isDuplicated  = false;
            if (bottlesLength > 0) {
                for (var i = 0; i < bottlesLength; i++) {
                    currentBottle = bottles[i];
                    if (currentBottle.id == aBottleOfMilk.id) {
                        currentBottle.amount += aBottleOfMilk.amount;
                        isDuplicated = true;
                        break;
                    }
                }
                // if no duplicate bottle => add new bottle to monday
                if (!isDuplicated) {
                    bottles.push(aBottleOfMilk);
                }
            } else {
                // for the 1st time drop
                bottles.push(aBottleOfMilk);
            }
        }

        /**
         * Check grey background css class
         * if amount <=2. Using class .grey-bg-2
         * if 2 <= amount <=4. Using class .grey-bg-4
         * if 4<= amount <=6. Using class .grey-bg-6
         * if 6<=amount <=8. Using class .grey-bg-8
         */
        function checkGreyBg(dayOfWeek) {
            CartMonthlyService.checkGreyBg(dayOfWeek);
        }

        /**
         * Remove bottle at index
         */
        function removeBottle(dayOfWeek, index) {
            dayOfWeek.bottles.splice(index, 1);
            checkGreyBg(dayOfWeek);
        }

        /**
         * Based on user's selection
         * --> copy the bottles array of target week
         */
        function select(weekIndex) {
            CartMonthlyService.select(weekIndex);
        }

        function checkout() {
            $state.go('.checkout.step-one');
        }

    }
})();
