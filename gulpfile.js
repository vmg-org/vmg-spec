var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var fs = require('fs');

var gitLog = require('git-log');
var exec = require('child_process').exec;
var pth = {
  src: './src/'
};

gulp.task('jshint', function() {
  gulp.src(['./*.js*', pth.src + '**/*.js*'])
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

function jsonConcat(o1, o2) {
  for (var key in o2) {
    o1[key] = o2[key];
  }
  return o1;
}

gulp.task('build', ['jshint'], function(done) {
  var info = require(pth.src + 'info');
  info.definitions = require(pth.src + 'definitions');

  var pathsGet = require(pth.src + 'paths-get');
  var pathsPost = require(pth.src + 'paths-post');

  info.paths = jsonConcat(pathsGet, pathsPost);

  fs.writeFile('index.json', new Buffer(JSON.stringify(info)), done);
});
