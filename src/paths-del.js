//var pth = {
//  defs: '#/definitions/'
//};

var a = {};

a.d4000 = {
  "tags": ["user_session"],
  "summary": "Log out, remove an user_session",
  "parameters": [{
    "in": "query",
    "name": "sid",
    "description": "user_session id",
    "required": true
  }],
  "responses": {
    "204": {
      "description": "Success"
    }
  },
  "security": {}
};

var result = {};

// Add opertionId = path of API
for (var i in a) {
  a[i].operationId = i;
  result['/' + i] = {
    'delete': a[i]
  };
  //  a[i]['post'].operationId = i.substr(1);
}

module.exports = result;
