(function() {
'use strict';

    angular
        .module('core.admin')
        .controller('AdminTemplateController', AdminTemplateController);

    AdminTemplateController.$inject = [];
    function AdminTemplateController() {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
            adjustBodyElementPadding();
            vm.helloLabel = 'Xin chào,';
            vm.admin = {name: 'Admin'},
            vm.logoutLabel = 'Đăng xuất';
            vm.home = {label: 'Trở về trang chủ', state: 'home.index'};
            vm.navList = [
                {
                    label: 'Quản lý đơn hàng',
                    state: 'admin.checkout-management'
                },
                {
                    label: 'Quản lý người dùng',
                    state: 'admin.user-management'
                },
                {
                    label: 'Quản lý sữa',
                    state: 'admin.milk-management'
                },
                {
                    label: 'Quản lý bài viết',
                    state: 'admin.cms-management'
                },
                {
                    label: 'Quản lý liên hệ',
                    state: 'admin.contact-management'
                },
                {
                    label: 'Quản lý thống kê',
                    state: 'home'
                }
            ];
        }

        // body element only padding top 10px
        function adjustBodyElementPadding() {
            jQuery('body').addClass('padding-top-admin-page');
        }

    }
})();