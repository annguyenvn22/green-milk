(function () {
    'use strict';

    angular
        .module('core')
        .controller('MemberController', MemberController);

    MemberController.$inject = [];

    function MemberController() {
        var vm = this;

        vm.header  = 'Đội Ngũ';
        vm.members = [
            {
                id  : 0,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            },
            {
                id  : 1,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            },
            {
                id  : 2,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            },
            {
                id  : 3,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            },
            {
                id  : 4,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            },
            {
                id  : 5,
                img : 'modules/core/client/img/member.png',
                name: 'Ms. Hương'
            }
        ];
    }
})();