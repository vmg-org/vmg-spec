/**
 * Chore tasks
 * @todo #44! send DEL methods to POST - HTML forms and clean CORS compability
 * @todo #44! separate model defenition and API methods
 *            model - for db building
 *            methods - for API
 */
var gulp = require('gulp');
var path = require('path');
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
  var logFilePath = 'doc/log-201410.log';
  var afterDate = new Date(2014, 9, 1); //new Date(Date.now() - (1000 * 60 * 60 * 24));
  var beforeDate = new Date(2014, 10, 4);

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
  require(pth.src + 'definitions').run(path.resolve(pth.src + 'defs'), function(err, readyDefs) {
    var info = require(pth.src + 'info');
    info.definitions = readyDefs;

    var pathsGet = require(pth.src + 'paths-get');
    var pathsPost = require(pth.src + 'paths-post');

    var a = jsonConcat(pathsGet, pathsPost);
    info.paths = a;

    fs.writeFile('index.json', new Buffer(JSON.stringify(info)), done);
  });
});
