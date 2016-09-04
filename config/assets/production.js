'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
    client: {
        lib: {
            css: [
                // bower:css
                'public/lib/bootstrap/dist/css/bootstrap.min.css',
                'public/lib/components-font-awesome/css/font-awesome.min.css',
                'public/lib/angular-ui-grid/ui-grid.min.css',
                'public/lib/angular-block-ui/dist/angular-block-ui.min.css'
                // endbower
            ],
            js: [
                // bower:js
                'public/lib/jquery/dist/jquery.min.js',
                'public/lib/jquery-ui/jquery-ui.min.js',
                'public/lib/angular/angular.min.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/angular-animate/angular-animate.min.js',
                'public/lib/angular-dragdrop/src/angular-dragdrop.min.js',
                'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                'public/lib/angular-resource/angular-resource.min.js',
                'public/lib/angular-messages/angular-messages.min.js',
                'public/lib/angular-ui-grid/ui-grid.min.js',
                'public/lib/angular-cookies/angular-cookies.min.js',
                'public/lib/a0-angular-storage/dist/angular-storage.min.js',
                'public/lib/angular-breadcrumb/release/angular-breadcrumb.min.js',
                'node_modules/angular-chart.js/dist/angular-chart.min.js',
                'public/lib/angular-block-ui/dist/angular-block-ui.min.js'
                // endbower
            ]
        },
        css: 'public/dist/application.min.css',
        js: 'public/dist/application.min.js'
    }
};
