
/**
 * Load dependencies
 */
var gulp                    = require('gulp'),
    _                       = require('lodash'),
    defaultAssets           = require('./config/assets/default'),
    runSequence             = require('run-sequence'),
     pngquant               = require('imagemin-pngquant'),
    plugins                 = require('gulp-load-plugins')({
        rename:               {
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

// Set NODE_ENV to 'c9'
gulp.task('env:c9', function () {
    process.env.NODE_ENV = 'c9';
});


// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
  process.env.NODE_ENV = 'production';
});


// JS minifying task
gulp.task('uglify', function () {
  return gulp.src(defaultAssets.client.js)
    .pipe(plugins.uglify())
    .pipe(plugins.concat('application.min.js'))
    .pipe(gulp.dest('public/dist'));
});

// CSS minifying task
gulp.task('cssmin', function () {
  return gulp.src(defaultAssets.client.css)
    .pipe(plugins.csso())
    .pipe(plugins.concat('application.min.css'))
    .pipe(gulp.dest('public/dist'));
});

// Imagemin task
gulp.task('imagemin', function () {
  return gulp.src(defaultAssets.client.img)
    .pipe(plugins.imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('public/dist/img'));
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

// Run the project in c9 clould ide
gulp.task('c9', function (done) {
    runSequence('env:c9', 'sass', ['nodemon', 'watch'], done);
});



// Lint project files and minify them into two production files.
gulp.task('build', function (done) {
  runSequence('env:dev', ['uglify', 'cssmin', 'imagemin'], done);
});


// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('build', 'env:prod', ['nodemon', 'watch'], done);
});