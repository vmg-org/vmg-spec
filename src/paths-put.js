//var pth = {
//  defs: '#/definitions/'
//};

var a = {};

var result = {};

// Add opertionId = path of API
for (var i in a) {
  a[i].operationId = i;
  result['/' + i] = {
    'put': a[i]
  };
  //  a[i]['post'].operationId = i.substr(1);
}

module.exports = result;
