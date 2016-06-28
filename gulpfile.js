var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifyHTML = require('gulp-minify-html');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('styluspage', function() {
    gulp.src('app/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({ stream: true }));
});



gulp.task('watch', ['browser-sync', 'styluspage'], function() {
    gulp.watch('app/css/**/*.styl', ['styluspage']); // Наблюдение за sass файлами в папке sass
    gulp.watch('dist/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});


gulp.task('default', ['watch']);
