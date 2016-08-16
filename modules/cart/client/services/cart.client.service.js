(function () {
    'use strict';

    angular
        .module('cart.services')
        .service('CartService', CartService);

    CartService.$inject = ['$resource'];
    function CartService($resource) {
        this.getMilkBottles = getMilkBottles;

        ////////////////

        function getMilkBottles() {
            var milks = [
                {
                    id      : 0,
                    name    : 'Sữa Gạo Lức',
                    imgSmall: 'modules/cart/client/img/_MG_3700_gaolut_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3700_gaolut_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3700_gaolut_67_223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 1,
                    name    : 'Sữa Hạt Sen',
                    imgSmall: 'modules/cart/client/img/_MG_3688_hatsen_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3688_hatsen_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3688_hatsen_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 2,
                    name    : 'Sữa Bắp',
                    imgSmall: 'modules/cart/client/img/_MG_3695_bap_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3695_bap_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3695_bap_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 3,
                    name    : 'Sữa Đậu Nành',
                    imgSmall: 'modules/cart/client/img/_MG_3688_daunanh_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3688_daunanh_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3688_daunanh_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 4,
                    name    : 'Sữa Đậu Đỏ',
                    imgSmall: 'modules/cart/client/img/_MG_3692_daudo_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3692_daudo_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3692_daudo_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 5,
                    name    : 'Sữa Đậu Phộng',
                    imgSmall: 'modules/cart/client/img/_MG_3709_dauphong_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3709_dauphong_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3709_dauphong_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 6,
                    name    : 'Sữa Đậu Xanh',
                    imgSmall: 'modules/cart/client/img/_MG_3670_dauxanh_37x122_item_thumbnail.png',
                    imgItem : 'modules/cart/client/img/_MG_3670_dauxanh_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3670_dauxanh_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                },
                {
                    id      : 7,
                    name    : 'Sữa Mè Đen',
                    imgSmall: 'modules/cart/client/img/_MG_3698_meden_37x122_item_thubmail.png',
                    imgItem : 'modules/cart/client/img/_MG_3698_meden_24x81_item.png',
                    imgBig  : 'modules/cart/client/img/_MG_3698_meden_67x223_milk.png',
                    amount  : 1,
                    price   : 12000
                }
            ];

            return milks;
        }
    }
})();