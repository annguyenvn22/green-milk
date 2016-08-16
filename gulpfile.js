
/**
 * Load dependencies
 */
var gulp          = require('gulp'),
    _             = require('lodash'),
    defaultAssets = require('./config/assets/default'),
    runSequence   = require('run-sequence'),
    plugins       = require('gulp-load-plugins')({
        rename: {
            'gulp-sass-glob': 'sassGlob'
        }
    });


/**
 * Auto restart server when something changes to update contents
 */
gulp.task('nodemon', function () {
    return plugins.nodemon({
        script: 'server.js',
        nodeArgs: ['--debug'],
        ext: 'js, pug',
        watch: _.union(defaultAssets.server.views, defaultAssets.server.allJS)
    });
});


/**
 * In sass/main.sass, imports all files from glob pattern
 * compile it using sass()
 */
gulp.task('sass', function () {
    return gulp.src('sass/main.sass')
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('public/css'));
});


// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
    process.env.NODE_ENV = 'development';
});


// Watch Files For Changes
gulp.task('watch', function () {
    // Start livereload
    plugins.livereload.listen();

    // Add watch rules
    gulp.watch(defaultAssets.server.views).on('change', plugins.livereload.changed);
    gulp.watch(defaultAssets.server.allJS).on('change', plugins.livereload.changed);
    gulp.watch(defaultAssets.client.js).on('change', plugins.livereload.changed);
    gulp.watch(defaultAssets.client.sass, ['sass']).on('change', plugins.livereload.changed);
    gulp.watch(defaultAssets.client.views).on('change', plugins.livereload.changed);
});


// Run the project in development mode
gulp.task('default', function (done) {
    runSequence('env:dev', 'sass', ['nodemon', 'watch'], done);
});