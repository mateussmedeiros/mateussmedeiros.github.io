/*--------------
--- REQUIRES ---
--------------*/
const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass');

sass.compiler = require('node-sass');

/*---------------
----- PATHS -----
---------------*/
const paths = {
  dev: {
    img: `assets/src/images/**/*`,
    js:`assets/src/js/*.js`,
    sass: `assets/src/sass/**/*.scss`,
  },
  dist: {
    img: `assets/dist/images`,
    js: `assets/dist/js`,
    css: `assets/dist/css`,
  }
}

/*--------------
---- ASSETS ----
--------------*/
const assets = {
  css: [
    'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
    'node_modules/slick-carousel/slick/slick-theme.css'
  ],
  js: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/slick-carousel/slick/slick.min.js'
  ],
}

/*-------------
-- FUNCTIONS --
-------------*/
// Compilar SASS
function compSass() {
  return gulp
    .src(paths.dev.sass)
    .pipe(sass({ outputStyle: 'compressed' }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest(paths.dist.css));
}

// Importar CSS dos assets
function vendorCss() {
  return gulp
    .src(assets.css)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(paths.dist.css));
}

// Concatenar e minificar JS dos assets
function vendorJs() {
  return gulp
    .src(assets.js)
    .pipe(concat('vendor.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
    }))
    .pipe(gulp.dest(paths.dist.js));
}

// Concatenar e minificar JS
function minJs() {
  return gulp
    .src(paths.dev.js)
    .pipe(concat('main.js'))
    .pipe(minify({
      ext: {
        min: '.min.js'
      },
    }))
    .pipe(gulp.dest(paths.dist.js));
}

// Minificar imagens
function minImg() {
  return gulp
    .src(paths.dev.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.img));
}

// Assistir arquivos
function watch() {
  gulp.watch(paths.dev.sass, compSass);
  gulp.watch(paths.dev.img, minImg);
  gulp.watch(paths.dev.js, minJs);
}

/*-------------
---- TASKS ----
-------------*/
gulp.task("default", watch);
gulp.task("assets", vendorCss);
gulp.task("image", minImg);
gulp.task("js", gulp.series(vendorJs, minJs));
gulp.task("sass", compSass);