(function () {
    'use strict';

    angular
        .module('checkout.services')
        .factory('CheckoutService', CheckoutService);

    CheckoutService.$inject = ['$resource'];
    function CheckoutService($resource) {
        var Checkout = $resource('/api/checkout/:checkoutId', {
            // Default params.
        }, {
            // Actions.
        }, {
            // Options. When cart (both monthly and single) is empty.
            cancelable: true
        });

        angular.extend(Checkout, {
            queryMock: function () {
                var milks = [
                    {
                        id: 0,
                        name: 'Sữa Gạo Lức',
                        imgSmall: 'modules/cart/client/img/_MG_3700_gaolut_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3700_gaolut_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3700_gaolut_67_223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 1,
                        name: 'Sữa Hạt Sen',
                        imgSmall: 'modules/cart/client/img/_MG_3688_hatsen_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3688_hatsen_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3688_hatsen_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 2,
                        name: 'Sữa Bắp',
                        imgSmall: 'modules/cart/client/img/_MG_3695_bap_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3695_bap_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3695_bap_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 3,
                        name: 'Sữa Đậu Nành',
                        imgSmall: 'modules/cart/client/img/_MG_3688_daunanh_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3688_daunanh_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3688_daunanh_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 4,
                        name: 'Sữa Đậu Đỏ',
                        imgSmall: 'modules/cart/client/img/_MG_3692_daudo_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3692_daudo_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3692_daudo_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 5,
                        name: 'Sữa Đậu Phộng',
                        imgSmall: 'modules/cart/client/img/_MG_3709_dauphong_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3709_dauphong_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3709_dauphong_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 6,
                        name: 'Sữa Đậu Xanh',
                        imgSmall: 'modules/cart/client/img/_MG_3670_dauxanh_37x122_item_thumbnail.png',
                        imgItem: 'modules/cart/client/img/_MG_3670_dauxanh_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3670_dauxanh_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    },
                    {
                        id: 7,
                        name: 'Sữa Mè Đen',
                        imgSmall: 'modules/cart/client/img/_MG_3698_meden_37x122_item_thubmail.png',
                        imgItem: 'modules/cart/client/img/_MG_3698_meden_24x81_item.png',
                        imgBig: 'modules/cart/client/img/_MG_3698_meden_67x223_milk.png',
                        amount: 1,
                        price: 12000
                    }
                ];
                var aweek = {
                    monday: {
                        img: {
                            src: 'modules/cart/client/img/monday_vi.png',
                            alt: 'Monday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },
                    tuesday: {
                        img: {
                            src: 'modules/cart/client/img/tuesday_vi.png',
                            alt: 'Tuesday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },
                    wednesday: {
                        img: {
                            src: 'modules/cart/client/img/wednesday_vi.png',
                            alt: 'Wednesday',
                        },
                        greyBg: "greyBackgroundDefault" + ' wednesday',
                        bottles: [],
                        bottlesTmp: []
                    },
                    thursday: {
                        img: {
                            src: 'modules/cart/client/img/thursday_vi.png',
                            alt: 'Thursday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },
                    friday: {
                        img: {
                            src: 'modules/cart/client/img/friday_vi.png',
                            alt: 'Friday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },
                    saturday: {
                        img: {
                            src: 'modules/cart/client/img/saturday_vi.png',
                            alt: 'Saturday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },
                    sunday: {
                        img: {
                            src: 'modules/cart/client/img/sunday_vi.png',
                            alt: 'Sunday',
                        },
                        greyBg: "greyBackgroundDefault",
                        bottles: [],
                        bottlesTmp: []
                    },

                    options: [],
                    isCheckboxChecked: false,
                    copyOf: BLANK
                };

                var week1 = angular.copy(aweek);
                week1.monday.bottles.push(milks[0]);
                week1.monday.bottles.push(milks[1]);
                week1.monday.bottles.push(milks[2]);
                week1.friday.bottles.push(milks[0]);
                week1.friday.bottles.push(milks[1]);
                week1.friday.bottles.push(milks[2]);
                week1.sunday.bottles.push(milks[0]);
                week1.sunday.bottles.push(milks[1]);
                week1.sunday.bottles.push(milks[2]);
               
                week1.monday.status='resolved';
                week1.monday.status='resolved';
                week1.monday.status='resolved';
                week1.friday.status='pending';
                week1.friday.status='pending';
                week1.friday.status='pending';
                week1.sunday.status='resolved';
                week1.sunday.status='resolved';
                week1.sunday.status='resolved';

                
                

                var week2 = angular.copy(aweek);
                week2.tuesday.bottles.push(milks[0]);
                week2.tuesday.bottles.push(milks[1]);
                week2.tuesday.bottles.push(milks[2]);
                week2.friday.bottles.push(milks[0]);
                week2.friday.bottles.push(milks[1]);
                week2.friday.bottles.push(milks[2]);
                week2.thursday.bottles.push(milks[0]);
                week2.thursday.bottles.push(milks[1]);
                week2.thursday.bottles.push(milks[2]);
                
                
                week2.tuesday.status='resolved';
                week2.tuesday.status='resolved';
                week2.tuesday.status='resolved';
                week2.friday.status='pending';
                week2.friday.status='pending';
                week2.friday.status='pending';
                week2.thursday.status='resoved';
                week2.thursday.status='resoved';
                week2.thursday.status='resoved';





                var week3 = angular.copy(aweek);
                week3.monday.bottles.push(milks[0]);
                week3.monday.bottles.push(milks[1]);
                week3.monday.bottles.push(milks[2]);
                week3.friday.bottles.push(milks[0]);
                week3.friday.bottles.push(milks[1]);
                week3.friday.bottles.push(milks[2]);
                week3.sunday.bottles.push(milks[0]);
                week3.sunday.bottles.push(milks[1]);
                week3.sunday.bottles.push(milks[2]);

                week3.monday.status='resolved';
                week3.monday.status='resolved';
                week3.monday.status='resolved';
                week3.friday.status='pending';
                week3.friday.status='pending';
                week3.friday.status='pending';
                week3.sunday.status='resolved';
                week3.sunday.status='resolved';
                week3.sunday.status='resolved';






                var week4 = angular.copy(aweek);
                week4.tuesday.bottles.push(milks[0]);
                week4.tuesday.bottles.push(milks[1]);
                week4.tuesday.bottles.push(milks[2]);
                week4.friday.bottles.push(milks[0]);
                week4.friday.bottles.push(milks[1]);
                week4.friday.bottles.push(milks[2]);
                week4.thursday.bottles.push(milks[0]);
                week4.thursday.bottles.push(milks[1]);
                week4.thursday.bottles.push(milks[2]);


                week4.tuesday.status='resolved';
                week4.tuesday.status='resolved';
                week4.tuesday.status='resolved';
                week4.friday.status='pending';
                week4.friday.status='pending';
                week4.friday.status='pending';
                week4.thursday.status='resoved';
                week4.thursday.status='resoved';
                week4.thursday.status='resoved';


                var WEEK1 = 'Tuần 1';
                var WEEK2 = 'Tuần 2';
                var WEEK3 = 'Tuần 3';
                var BLANK = '';

                week2.options = [BLANK, WEEK1];
                week3.options = [BLANK, WEEK1, WEEK2];
                week4.options = [BLANK, WEEK1, WEEK2, WEEK3];

                var month = [week1, week2, week3, week4];
                return {
                    id: 1234,
                    type: 'monthly',
                    dateCreated: new Date(),
                    status: 'pending',
                    cart: month,
                    user: {
                        firstName: 'An',
                        lastName: 'Nguyen',
                        displayName: 'Nguyen Van Chuc An'
                    }
                }
            }
        });


        return Checkout;

        ////////////////


    }
})();