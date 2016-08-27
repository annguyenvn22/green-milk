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
                        state: 'home.about.differences'
                    },
                    {
                        name : 'Sản Phẩm',
                        state: 'home.about.products'
                    }
                ]
            },
            {
                name    : 'Sản Phẩm',
                subMenus: [
                    {
                        name : 'Sữa Hạt Sen',
                        state: 'home.products.lotus'
                    },
                    {
                        name : 'Sữa Bắp',
                        state: 'home.products.corn'
                    },
                    {
                        name : 'Sữa Đậu Nành',
                        state: 'home.products.soy'
                    },
                    {
                        name : 'Sữa Đậu Đỏ',
                        state: 'home.products.red-beans'
                    },
                    {
                        name : 'Sữa Đậu Phộng',
                        state: 'home.products.peanuts'
                    },
                    {
                        name : 'Sữa Đậu Xanh',
                        state: 'home.products.green-beans'
                    },
                    {
                        name : 'Sữa Mè Đen',
                        state: 'home.products.black-sesame'
                    },
                    {
                        name : 'Sữa Gạo Lứt',
                        state: 'home.products.brown-rice'
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
                        state: 'home.cart.cart-single'
                    },
                    {
                        name : 'Đặt Theo Tháng',
                        state: 'home.cart.cart-monthly'
                    }
                ]
            },
            {
                name    : 'Hợp Tác',
                state   : 'home.co-operate',
                subMenus: []
            },
            {
                name    : 'Hoạt Động',
                subMenus: [
                    {
                        name : 'Green Milk Team',
                        state: 'home.activities.green-milk-team'
                    },
                    {
                        name : 'Tin Tức',
                        state: 'home.activities.news'
                    }
                ]
            },
            {
                name    : 'Tuyển Dụng',
                state   : 'home.recruitment',
                subMenus: []
            }
        ];
    }
})();
