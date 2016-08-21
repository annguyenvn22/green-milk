(function() {
    'use strict';
    
    angular
        .module('users.admin')
        .controller('AdminLoginController', AdminLoginController);
        
    AdminLoginController.$inject = ['$http', '$state'];
    
    function AdminLoginController($http, $state) {
        var vm = this;

        activate();

        vm.login = login;
        vm.dismissErrorMsg = dismissErrorMsg;

        /////////////

        function activate() {
            vm.usernameLabel = 'Tên đăng nhập';
            vm.passwordLabel = 'Mật khẩu';
            vm.rememberLabel = 'Ghi nhớ';
            vm.loginLabel = 'Đăng nhập';
            vm.errorMsg = 'Sai Tên đăng nhập / Mật khẩu';
            vm.showErrorMsg = false;
        }

        function login() {
            $http({
                method: 'POST',
                url: '/api/auth/signin',
                data: vm.admin
            }).then(loginSuccess, loginFail);
        }

        function loginSuccess(response) {
            $state.go('admin.checkout-management');
        }

        function loginFail(err) {
            vm.showErrorMsg = true;
        }

        function dismissErrorMsg(that) {
            vm.showErrorMsg = false;
        }
        
    }
}());