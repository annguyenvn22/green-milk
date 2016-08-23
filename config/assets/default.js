'use strict';

module.exports = {
    client: {
        lib  : {
            css  : [
                // bower:css
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/components-font-awesome/css/font-awesome.css',
                'public/lib/angular-ui-grid/ui-grid.css'
                // endbower
            ],
            js   : [
                // bower:js
                'public/lib/jquery/dist/jquery.js',
                'public/lib/jquery-ui/jquery-ui.js',
                'public/lib/angular/angular.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-dragdrop/src/angular-dragdrop.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-messages/angular-messages.js',
                'public/lib/angular-ui-grid/ui-grid.min.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/a0-angular-storage/dist/angular-storage.js',
                'public/lib/angular-breadcrumb/release/angular-breadcrumb.js',
                'node_modules/chart.js/dist/Chart.js',
                'node_modules/angular-chart.js/dist/angular-chart.js'
                // endbower
            ],
            tests: ['public/lib/angular-mocks/angular-mocks.js']
        },
        css  : [
            'public/css/main.css'
        ],
        sass : [
            'sass/*.sass',
            'modules/*/client/sass/*.sass',
            'modules/*/client/sass/**/*.sass'
        ],
        js   : [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js',
            'modules/*/client/*.js',
            'modules/*/client/**/*.js'
        ],
        img  : [
            'modules/**/*/img/**/*.jpg',
            'modules/**/*/img/**/*.png',
            'modules/**/*/img/**/*.gif',
            'modules/**/*/img/**/*.svg'
        ],
        views: ['modules/*/client/views/**/*.pug']
    },
    server: {
        gulpConfig: ['gulpfile.js'],
        allJS     : ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
        models    : 'modules/*/server/models/**/*.js',
        routes    : ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        views     : ['modules/*/server/views/*.pug'],
        config    : ['modules/*/server/config/*.js']
    }
};
