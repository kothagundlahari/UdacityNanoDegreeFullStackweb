var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin')
livereload = require('gulp-livereload');


gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dev/js/minJs'))
})

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dev/css/minCSS'))
})

gulp.task('imagemin', function() {
    gulp.src('images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dev/images/minPng'))
})

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('js/*.js', 'css/*.css', 'images/*.png' ['scripts', 'styles', 'imagemin']);
});



gulp.task('default', ['scripts', 'styles', 'imagemin', 'watch'])