/**
 * App helper
 * @module
 */

/**
 * Clone json object
 * @param {Object} obj - Initial object
 */
exports.cloneJson = function(obj) {
  if (obj === null || typeof(obj) !== 'object') {
    return obj;
  }

  var temp = obj.constructor(); // changed

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = exports.cloneJson(obj[key]);
    }
  }
  return temp;
};

module.exports = exports;
