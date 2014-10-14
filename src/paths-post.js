var pth = {
  defs: '#/definitions/'
};

var a = {};

a.w2000 = {
  "tags": ["movie_template"],
  "summary": "Create a movie_template with episode_template_arr",
  "parameters": [{
    "in": "body",
    "name": "body",
    "description": "movie_template with episode_template_arr",
    "schema": {
      "$ref": pth.defs + "movie_template"
    },
    "required": true
  }],
  "security": {}
};

// public method, an user not auth yet
a.w2001 = {
  tags: ['user_session'],
  summary: "Create an user session",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "User session",
    "required": true,
    "schema": {
      $ref: pth.defs + "user_session"
    }
  }]
};

a.w2002 = {
  tags: ['episode_bid'],
  summary: "Create a episode_bid with empty media_spec",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "episode_bid with media_spec_item",
    "required": true,
    "schema": {
      $ref: pth.defs + "episode_bid"
    }
  }],
  security: {}
};

var result = {};

// Add opertionId = path of API
for (var i in a) {
  a[i].operationId = i;
  result['/' + i] = {
    'post': a[i]
  };
  //  a[i]['post'].operationId = i.substr(1);
}

module.exports = result;
