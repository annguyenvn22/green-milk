(function () {
    'use strict';

    angular
        .module('core')
        .controller('CarouselController', CarouselController);

    CarouselController.$inject = ['$state'];

    function CarouselController($state) {
        var vm = this;

        vm.interval       = 2000;
        vm.noWrapSlides   = false;
        vm.active         = 0;
        vm.openCartSingle = openCartSingle;
        vm.header         = 'Chúng tôi tạo ra những sản phẩm sạch';
        vm.caption1       = 'GreenMilk mang đến cho bạn không chỉ là 8 loại sữa từ';
        vm.caption2       = 'tự nhiên mà còn là tinh thần phục vụ thân thiện, cởi mở của các bạn trẻ đầy nhiệt huyết';
        vm.buttonLabel    = 'Đặt Hàng Ngay';
        vm.slides         = [
            {
                id    : 0,
                imgUrl: 'modules/core/client/img/carousel02.jpg'
            }
        ];
        //////////////////////////////

        function openCartSingle() {
            $state.go('home.cart.cart-single');
        }
    }
}());
