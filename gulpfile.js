/* 

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-minify-css');
var util        = require('gulp-util');
var pixrem      = require('gulp-pixrem');


/* 

ERROR HANDLING
==============
*/

var handleErrors = function() {
module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};
};

/* 

FILE PATHS
==========
*/

var sassSrc = 'src/**/*.{sass,scss}';
var sassFile = 'src/classic.scss';
var cssDest = 'gui/slick/css';

/* 

SASS
====
*/

gulp.task('sass', function() {
  gulp.src(sassFile)

  .pipe(sass({
    compass: false,
    bundleExec: true,
    sourcemap: false,
    style: 'compressed'
  })) 

  .on('error', handleErrors)
  .on('error', util.log)
  .on('error', util.beep)
  .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //adds browser prefixes (eg. -webkit, -moz, etc.)
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(pixrem())
  .pipe(gulp.dest(cssDest));
  });


/*

WATCH
=====

*/

gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch'], function() {
  gulp.watch(sassSrc, ['sass']);
});


/* 

BUILD
=====
*/

gulp.task('build', function(cb) {
  runSequence('sass', cb);
});

/* 

DEFAULT
=======
*/

gulp.task('default', function(cb) {
    runSequence(
    'sass',
    'watch',
    cb
    );
});
