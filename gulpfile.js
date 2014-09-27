var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');

var filePath = {
  jshintBase: {
    src: ['./*.js', './*.json']
  }
};

gulp.task('default', function() {
  gulp.src(filePath.jshintBase.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(jshintReporter));
});
