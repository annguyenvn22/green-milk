(function () {
    'use strict';

    angular
        .module('cms.routes')
        .config(CMSRouteConfig);

    CMSRouteConfig.$inject = ['$stateProvider'];

    function CMSRouteConfig($stateProvider) {
        $stateProvider
            /////////////////////////////////////////////////
            //                     ABOUT
            /////////////////////////////////////////////////

            .state('home.about', {
                abstract: true,
                url: '/ve-green-milk',
                templateUrl: 'cms/client/views/cms-template'
            })
            .state('home.about.differences', {
                url: '/su-khac-biet',
                templateUrl: 'cms/client/views/about/differences',
                controller: 'DifferencesController',
                controllerAs: 'vm'
            })
            .state('home.about.products', {
                url: '/san-pham',
                templateUrl: 'cms/client/views/about/products',
                controller: 'ProductsController',
                controllerAs: 'vm'
            })

            /////////////////////////////////////////////////
            //                     PRODUCTS
            /////////////////////////////////////////////////

            .state('home.products', {
                abstract: true,
                url: '/san-pham',
                templateUrl: 'cms/client/views/cms-template'
            })
            .state('home.products.black-sesame', {
                url: '/sua-me-den',
                templateUrl: 'cms/client/views/products/black-sesame',
                controller: 'BackSesameController',
                controllerAs: 'vm'
            }).state('home.products.brown-rice', {
                url: '/sua-gao-luc',
                templateUrl: 'cms/client/views/products/brown-rice',
                controller: 'BrownRiceController',
                controllerAs: 'vm'
            }).state('home.products.corn', {
                url: '/sua-bap',
                templateUrl: 'cms/client/views/products/corn',
                controller: 'CornController',
                controllerAs: 'vm'
            }).state('home.products.green-beans', {
                url: '/sua-dau-xanh',
                templateUrl: 'cms/client/views/products/green-beans',
                controller: 'GreenBeansController',
                controllerAs: 'vm'
            }).state('home.products.lotus', {
                url: '/sua-hat-sen',
                templateUrl: 'cms/client/views/products/lotus',
                controller: 'LotusController',
                controllerAs: 'vm'
            }).state('home.products.peanuts', {
                url: '/sua-dau-phong',
                templateUrl: 'cms/client/views/products/peanuts',
                controller: 'PeanutsController',
                controllerAs: 'vm'
            }).state('home.products.red-beans', {
                url: '/sua-dau-do',
                templateUrl: 'cms/client/views/products/red-beans',
                controller: 'RedBeansController',
                controllerAs: 'vm'
            }).state('home.products.soy', {
                url: '/sua-dau-nanh',
                templateUrl: 'cms/client/views/products/soy',
                controller: 'SoyController',
                controllerAs: 'vm'
            })

            /////////////////////////////////////////////////
            //                     ACTIVITIES
            /////////////////////////////////////////////////

            .state('home.activities', {
                abstract: true,
                url: '/hoat-dong',
               templateUrl: 'cms/client/views/cms-template'
            })
            .state('home.activities.green-milk-team', {
                url: '/green-milk-team',
                templateUrl: 'cms/client/views/activities/green-milk-team',
                controller: 'GreenMilkTeamController',
                controllerAs: 'vm'
            })
            .state('home.activities.news', {
                url: '/tin-tuc',
                templateUrl: 'cms/client/views/activities/news',
                controller: 'NewsController',
                controllerAs: 'vm'
            })

            /////////////////////////////////////////////////
            //              CO-OPERATE & RECRUITMENT
            /////////////////////////////////////////////////

            .state('home.co-operate', {
                url: '/hop-tac',
                templateUrl: 'cms/client/views/co-operate',
                controller: 'CoOperateController',
                controllerAs: 'vm'
            })
            .state('home.recruitment', {
                url: '/tuyen-dung',
                templateUrl: 'cms/client/views/recruitment',
                controller: 'RecruitmentController',
                controllerAs: 'vm'
            })


    }
}());
