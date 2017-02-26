var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');


gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dev/js/app.min.js'));
});

gulp.task('styles', function() {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dev/css/minCSS'));
});


gulp.task('default', ['scripts', 'styles']);