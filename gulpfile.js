var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
 
gulp.task('lint', function() {
  return gulp.src('assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src('assets/js/main.js')
    .pipe(uglify())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('images', function() {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'))
});

gulp.task('default', function() {
    gulp.run('uglify', 'images', 'lint');
});
