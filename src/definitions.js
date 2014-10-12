var fs = require('fs');
var path = require('path');

exports.run = function(defsFolder, next) {
  fs.readdir(defsFolder, function(err, fileNames) {
    if (err) {
      throw err;
    }

    var defs = {};
    fileNames.forEach(function(fileName) {
      var asdf = fileName.split('.')[0];
      defs[asdf] = require(path.join(defsFolder, fileName));

    });
    // add required for all fields
    for (var i in defs) {
      for (var pkey in defs[i].properties) {
        var prop = defs[i].properties[pkey];
        if (prop.type !== 'array') {
          if (prop.required !== false) {
            prop.required = true;
          }
        }
      }
    }
    next(null, defs);
  });
};

module.exports = exports;
