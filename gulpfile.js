var gulp = require('gulp'),
    sass = require('gulp-sass'),
    reactNativeStylesheetCss = require('gulp-react-native-stylesheet-css');
 
gulp.task('styles', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(reactNativeStylesheetCss())
        .pipe(gulp.dest('./dist/sass/'));
});