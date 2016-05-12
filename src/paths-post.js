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

// Replacement of w2006
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

a.w2009 = {
  tags: ["job_output"],
  summary: "DELETE a job_output. Delete array of file_output for this job. Delete array of media_file for this job. Delete these files from a file storage, and their snapshots (if exist).",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "job_output",
    "required": true,
    "schema": {
      $ref: pth.defs + "job_output"
    }
  }],
  // only for media creator (or site moderator)
  security: {}
};

a.w2010 = {
  tags: ["episode_bid"],
  summary: "DELETE an episode_bid with a media_spec and media_owner. Only if not yet uploaded. Like an empty bid",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "episode_bid",
    "required": true,
    "schema": {
      $ref: pth.defs + "episode_bid"
    }
  }],
  // only for media creator (or site moderator)
  security: {}
};

a.w2011 = {
  "tags": ["user_session"],
  "summary": "Log out, remove an user_session",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "user_session, might be empty, removes by session id in the AUTH header",
    "required": true,
    "schema": {
      $ref: pth.defs + "user_session"
    }
  }],
  "security": {}
};

a.w2012 = {
  tags: ["job_source"],
  summary: "DELETE a job_source. Delete a file_source for this job. Delete a media_file for this job. Delete files from a cloud storage, and their snapshots (if exist).",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "job_source",
    "required": true,
    "schema": {
      $ref: pth.defs + "job_source"
    }
  }],
  // only for media creator (or site moderator)
  security: {}
};

a.w2014 = {
  tags: ["user_profile"],
  summary: "DELETE an user_profile. Delete all stuff from user profile besides public elements",
  parameters: [{
    "in": "body",
    "name": "body",
    "description": "user_profile",
    "required": true,
    "schema": {
      $ref: pth.defs + "user_profile"
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
