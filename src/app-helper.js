var cloneJson = function(obj) {
  if (obj === null || typeof(obj) !== 'object') {
    return obj;
  }

  var temp = obj.constructor(); // changed

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = cloneJson(obj[key]);
    }
  }
  return temp;
};

exports.cloneJson = cloneJson;

module.exports = exports;
