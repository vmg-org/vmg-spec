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
  "responses": {
    "201": {
      "description": "Success",
      "schema": {
        "$ref": pth.defs + "movie_template"
      }
    },
    "400": {
      "description": "Bad request"
    }
  },
  "security": {}
};

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
