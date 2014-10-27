//var pth = {
//  defs: '#/definitions/'
//};

var a = {};

a.d4000 = {
  "tags": ["user_session"],
  "summary": "Log out, remove an user_session",
  "parameters": [],
  "security": {}
};

a.d4001 = {
  tags: ['episode_bid'],
  summary: 'Delete a non-uploaded episode_bid and media_spec too (with is_ready = false)',
  parameters: [{
    "in": "query",
    "name": "id_of_media_spec",
    "description": "Id of episode_bid and id of media_spec",
    "required": true,
    "type": "integer"
  }],
  security: {}
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
