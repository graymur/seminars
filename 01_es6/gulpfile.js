var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('webpack-watch', shell.task(['webpack --watch']));
gulp.task('webpack-min', shell.task(['webpack -p']));

gulp.task('min', ['webpack-min']);

gulp.task('watch', function() {
    // ���� �����
});

gulp.task('default', ['watch', 'webpack-watch']);