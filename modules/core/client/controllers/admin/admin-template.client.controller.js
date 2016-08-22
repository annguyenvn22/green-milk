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
            vm.helloLabel = 'Xin chào,';
            vm.admin = {name: 'Admin'},
            vm.logoutLabel = 'Đăng xuất';

            vm.navList = [
                {
                    label: 'Quản lý đơn hàng',
                    state: 'admin'
                },
                {
                    label: 'Quản lý người dùng',
                    state: 'admin'
                },
                {
                    label: 'Quản lý sữa',
                    state: 'admin'
                },
                {
                    label: 'Quản lý bài viết',
                    state: 'admin'
                },
                {
                    label: 'Quản lý liên hệ',
                    state: 'admin'
                },
                {
                    label: 'Quản lý thống kê',
                    state: 'admin'
                }
            ];
         }
    }
})();