(function () {
    'use strict';

    angular
        .module('core')
        .controller('ProductController', ProductController);

    ProductController.$inject = [];

    function ProductController() {
        var vm = this;

        vm.header   = 'Sẩn Phẩm';
        vm.products = [
            {
                id  : 0,
                name: 'Sữa Mè Đen',
                img : 'modules/cart/client/img/_MG_3698_meden_67x223_milk.png'
            },
            {
                id  : 1,
                name: 'Sữa Gạo Lức',
                img : 'modules/cart/client/img/_MG_3700_gaolut_67_223_milk.png'
            },
            {
                id  : 2,
                name: 'Sữa Đậu Đỏ',
                img : 'modules/cart/client/img/_MG_3692_daudo_67x223_milk.png'
            },
            {
                id  : 3,
                name: 'Sữa Đậu Phộng',
                img : 'modules/cart/client/img/_MG_3709_dauphong_67x223_milk.png'
            },
            {
                id  : 4,
                name: 'Sữa Đậu Xanh',
                img : 'modules/cart/client/img/_MG_3670_dauxanh_67x223_milk.png'
            },
            {
                id  : 5,
                name: 'Sữa Đậu Nành',
                img : 'modules/cart/client/img/_MG_3688_daunanh_67x223_milk.png'
            },
            {
                id  : 6,
                name: 'Sữa Bắp',
                img : 'modules/cart/client/img/_MG_3695_bap_67x223_milk.png'
            },
            {
                id  : 7,
                name: 'Sữa Hạt Sen',
                img : 'modules/cart/client/img/_MG_3688_hatsen_67x223_milk.png'
            }
        ];
    }
}());