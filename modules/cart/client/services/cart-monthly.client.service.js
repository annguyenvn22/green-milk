(function () {
    'use strict';

    angular
        .module('cart.cart-monthly.services')
        .service('CartMonthlyService', CartMonthlyService);

    CartMonthlyService.$inject = ['CartService', '$resource'];
    function CartMonthlyService(CartService, $resource) {

        this.getMilkBottles  = CartService.getMilkBottles;
        this.getMonth        = getMonth;
        this.select          = select;
        this.checkGreyBg     = checkGreyBg;
        this.cleanCart       = cleanCart;
        this.isEmpty         = isEmpty;
        this.totalMoney      = totalMoney;
        this.totalWeekMoney  = totalWeekMoney;
        this.totalDayMoney   = totalDayMoney;
        this.totalWeekAmount = totalWeekAmount;
        this.totalDayAmount  = totalDayAmount;

        // the default value of class .grey-bg
        var greyBackgroundDefault = 'grey-bg-2';
        var greyBackgroundPrefix  = 'grey-bg-';

        /**
         * aweek explain:
         *  *day: object - day on week
         *  greyBg: in view, the background automically add/remove depends on number of bottles
         *  bottles: array - contains bottles will be send to server
         *  bottlesTmp: array - contains bottles dropped from aside
         */
        var aweek = {
            monday   : {
                img       : {
                    src: 'modules/cart/client/img/monday_vi.png',
                    alt: 'Monday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },
            tuesday  : {
                img       : {
                    src: 'modules/cart/client/img/tuesday_vi.png',
                    alt: 'Tuesday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },
            wednesday: {
                img       : {
                    src: 'modules/cart/client/img/wednesday_vi.png',
                    alt: 'Wednesday',
                },
                greyBg    : greyBackgroundDefault + ' wednesday',
                bottles   : [],
                bottlesTmp: []
            },
            thursday : {
                img       : {
                    src: 'modules/cart/client/img/thursday_vi.png',
                    alt: 'Thursday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },
            friday   : {
                img       : {
                    src: 'modules/cart/client/img/friday_vi.png',
                    alt: 'Friday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },
            saturday : {
                img       : {
                    src: 'modules/cart/client/img/saturday_vi.png',
                    alt: 'Saturday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },
            sunday   : {
                img       : {
                    src: 'modules/cart/client/img/sunday_vi.png',
                    alt: 'Sunday',
                },
                greyBg    : greyBackgroundDefault,
                bottles   : [],
                bottlesTmp: []
            },

            options          : [],
            isCheckboxChecked: false,
            copyOf           : BLANK
        };

        var week1 = angular.copy(aweek);
        var week2 = angular.copy(aweek);
        var week3 = angular.copy(aweek);
        var week4 = angular.copy(aweek);

        var WEEK1 = 'Tuần 1';
        var WEEK2 = 'Tuần 2';
        var WEEK3 = 'Tuần 3';
        var BLANK = '';

        week2.options = [BLANK, WEEK1];
        week3.options = [BLANK, WEEK1, WEEK2];
        week4.options = [BLANK, WEEK1, WEEK2, WEEK3];

        var month = [week1, week2, week3, week4];

        var monthBk = angular.copy(month);

        ////////////////

        /**
         * Get whole month
         */
        function getMonth() {
            return month;
        }

        /**
         * Change dayOfWeek's background depends on number of milk bottles
         */
        function changeGreyBg(dayOfWeek, number) {
            var newGreyBg    = greyBackgroundPrefix + number;
            dayOfWeek.greyBg = greyBackgroundPrefix + number;

            return newGreyBg;
        }

        /**
         * When dayOfWeek's No. of bottles turn 0 -> set default Grey background
         */
        function setDefaultGreyBg(dayOfWeek) {
            dayOfWeek.greyBg = greyBackgroundDefault;
        }

        /**
         * Based on user's selection
         * --> copy the bottles array of target week
         */
        function select(weekIndex) {
            var selection   = month[weekIndex].copyOf;
            var currentWeek = month[weekIndex];
            var targetWeek;
            switch (selection) {
                case BLANK:
                    clearBottles(currentWeek);
                    break;
                case WEEK1:
                    targetWeek = month[0];
                    copyBottles(currentWeek, targetWeek);
                    break;
                case WEEK2:
                    targetWeek = month[1];
                    copyBottles(currentWeek, targetWeek);
                    break;
                case WEEK3:
                    targetWeek = month[2];
                    copyBottles(currentWeek, targetWeek);
                    break;
            }
        }

        /**
         * Copy bottles from targetWeek to currentWeek
         */
        function copyBottles(currentWeek, targetWeek) {
            for (var prop in currentWeek) {
                if (typeof currentWeek[prop].bottles != 'undefined') {
                    currentWeek[prop].bottles = angular.copy(targetWeek[prop].bottles);
                    checkGreyBg(currentWeek[prop]);
                }
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
            var number = dayOfWeek.bottles.length;
            if (number == 0) {
                setDefaultGreyBg(dayOfWeek);
            } else {
                changeGreyBg(dayOfWeek, number);
            }
        }

        /**
         * Clear bottles array for all day in a specific week
         */
        function clearBottles(aweek) {
            for (var prop in aweek) {
                if (typeof aweek[prop].bottles != 'undefined') {
                    aweek[prop].bottles = [];
                }
            }
        }

        function cleanCart() {
            month   = monthBk;
            monthBk = angular.copy(month);
        }

        /**
         * Check bottles every bottle day in month empty?
         */
        function isEmpty() {
            var empty = true;
            angular.forEach(month, function iterateMonth(week, index, month) {
                if (angular.isObject(week) && !angular.isArray(week)) {
                    angular.forEach(week, function (day, dayString) {
                        if (angular.isDefined(day) && angular.isDefined(day.bottles)) {
                            if (day.bottles.length > 0) {
                                empty = false;
                                return empty;
                            }
                        }
                    })
                }
            });

            return empty;
        }

        function totalMoney() {
            var totalMoney = 0;
            angular.forEach(month, function iterateMonth(week, index, month) {
                if (angular.isObject(week) && !angular.isArray(week)) {
                    totalMoney += totalWeekMoney(week);
                }
            });

            return totalMoney;
        }

        function totalWeekMoney(week) {
            var totalMoney = 0;
            angular.forEach(week, function(day) {
                if (angular.isDefined(day) && angular.isDefined(day.bottles)) {
                    totalMoney += totalDayMoney(day);
                }
            });

            return totalMoney;
        }

        function totalDayMoney(day) {
            var totalMoney = 0;
            angular.forEach(day.bottles, function(bottle) {
                totalMoney += bottle.price * bottle.amount;
            })

            return totalMoney;
        }

        function totalWeekAmount(week) {
            var totalAmount = 0;
            angular.forEach(week, function(day) {
                if (angular.isDefined(day) && angular.isDefined(day.bottles)) {
                    totalAmount += totalDayAmount(day);
                }
            })

            return totalAmount;
        }

        function totalDayAmount(day) {
            var totalAmount = 0;
            angular.forEach(day.bottles, function(bottle) {
                totalAmount += bottle.amount;
            });

            return totalAmount;
        }

    } // End: CartMonthlyService
})();