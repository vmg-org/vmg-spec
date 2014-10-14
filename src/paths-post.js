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

// TODO: #31! add security tag
a.w2002 = {
  tags: ['bid_media'],
  summary: "Start to create bid_media with media_spec with original media_file (not yet uploaded)",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "bid_media with media_spec with media_file_arr (with one original video) - only mime type as id_of_container_format",
    "required": true,
    "schema": {
      $ref: pth.defs + "bid_media"
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
