(function () {
    'use strict';

    angular
        .module('core')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = [];
    function NavBarController() {
        var vm = this;

        vm.isCollapsed = true;
        vm.srOnly      = 'Toggle Navigation';
        vm.brand       = 'Green Milk';
        vm.menus       = [
            {
                name    : 'Về Green Milk',
                subMenus: [
                    {
                        name : 'Sự Khác Biệt',
                        state: 'about.differences'
                    },
                    {
                        name : 'Sản Phẩm',
                        state: 'about.products'
                    }
                ]
            },
            {
                name    : 'Sản Phẩm',
                subMenus: [
                    {
                        name : 'Sữa Hạt Sen',
                        state: 'products.lotus'
                    },
                    {
                        name : 'Sữa Bắp',
                        state: 'products.corn'
                    },
                    {
                        name : 'Sữa Đậu Nành',
                        state: 'products.soy'
                    },
                    {
                        name : 'Sữa Đậu Đỏ',
                        state: 'products.red-beans'
                    },
                    {
                        name : 'Sữa Đậu Phộng',
                        state: 'products.peanuts'
                    },
                    {
                        name : 'Sữa Đậu Xanh',
                        state: 'products.green-beans'
                    },
                    {
                        name : 'Sữa Mè Đen',
                        state: 'products.black-sesame'
                    },
                    {
                        name : 'Sữa Gạo Lứt',
                        state: 'products.brown-rice'
                    },
                    // TODO Hide this menu temporaryly
                    // {
                    //     name : 'Quy Trình Sản Xuất',
                    //     state: 'homepage'
                    // }
                ]
            },
            {
                name    : 'Đặt Hàng',
                subMenus: [
                    {
                        name : 'Đặt 1 Lần',
                        state: 'cart.cart-single'
                    },
                    {
                        name : 'Đặt Theo Tháng',
                        state: 'cart.cart-monthly'
                    }
                ]
            },
            {
                name    : 'Hợp Tác',
                state   : 'co-operate',
                subMenus: []
            },
            {
                name    : 'Hoạt Động',
                subMenus: [
                    {
                        name : 'Green Milk Team',
                        state: 'activities.green-milk-team'
                    },
                    {
                        name : 'Tin Tức',
                        state: 'activities.news'
                    }
                ]
            },
            {
                name    : 'Tuyển Dụng',
                state   : 'recruitment',
                subMenus: []
            }
        ];
    }
})();