var pth = {
  defs: '#/definitions/'
};

var a = {};

a.w2000 = {
  "tags": ["movie_template"],
  "summary": "Create a movie_template with episode_template_arr and movie_genre_item. Update - if id exists",
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

a.w2003 = {
  tags: ['job_source'],
  summary: 'Create a job to create a source file (upload to a cloud)',
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "job_source",
    "required": true,
    "schema": {
      $ref: pth.defs + "job_source"
    }
  }],
  security: {}
};

a.w2004 = {
  tags: ['job_output'],
  summary: 'Create a job to generate output files from a source file',
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "job_output",
    "required": true,
    "schema": {
      $ref: pth.defs + "job_output"
    }
  }],
  security: {}
};

a.w2005 = {
  tags: ['job_cut'],
  summary: 'Create a job to cut output files',
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "job_cut",
    "required": true,
    "schema": {
      $ref: pth.defs + "job_cut"
    }
  }],
  security: {}
};

a.w2006 = {
  tags: ['episode_bid'],
  summary: "Update an episode_bid.moder_rating",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "episode_bid",
    "required": true,
    "schema": {
      $ref: pth.defs + "episode_bid"
    }
  }],
  // only for movie creator (or site moderator)
  security: {}
};

// Replacement of prev
a.w2007 = {
  tags: ['bid_check'],
  summary: "Create a bid_check record, delete if is_approved === null",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "bid_check",
    "required": true,
    "schema": {
      $ref: pth.defs + "bid_check"
    }
  }],
  // only for movie creator (or site moderator)
  security: {}
};

a.w2008 = {
  tags: ['bid_rating'],
  summary: "Create a bid_rating record, delete if rating === null",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "bid_rating",
    "required": true,
    "schema": {
      $ref: pth.defs + "bid_rating"
    }
  }],
  // only for movie creator (or site moderator)
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
