var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');

var gitLog = require('git-log');
var exec = require('child_process').exec;
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

gulp.task('gitlog', function(done) {
  var tmpFilePath = 'doc/log-tmp.log';
  var logFilePath = 'doc/log-201409.log';
  var afterDate = new Date(2014, 8, 2); //new Date(Date.now() - (1000 * 60 * 60 * 24));
  var beforeDate = new Date(2014, 9, 1);

  var shellCommand = 'git log ' + gitLog.generateArgs(afterDate, beforeDate, tmpFilePath).join(' ');
  console.log(shellCommand);

  exec(shellCommand, function(err) {
    if (err) {
      return done(err);
    }

    gitLog.createLog(tmpFilePath, logFilePath, done);
  });
});
