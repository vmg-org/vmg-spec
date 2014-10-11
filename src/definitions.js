//var ahr = require('./app-helper');

var defs = {};

defs.movie_template = {
  primaryKey: "id",
  properties: {
    id: {
      "type": "integer",
      "description": "Id of movie template"
    },
    name: {
      "type": "string",
      "description": "Name of movie (template)",
      "maxLength": 255,
      "minLength": 3
    },
    duration_of_episodes: {
      "type": "integer",
      "description": "Duration of each episode"
    },
    preview_img_url: {
      "type": "string",
      "description": "Preview of the movie",
      "maxLength": 2000
    },
    created: {
      "type": "integer",
      "description": "When the template is created, unix timestamp"
    },
    finished: {
      "type": "integer",
      "description": "When the template is closed, unix timestamp"
    }
  }
};

defs.episode_template = {
  primaryKey: "id",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of a template of an episode"
    },
    "name": {
      "type": "string",
      "description": "Name of an episode",
      "maxLength": 255,
      "minLength": 5
    },
    "story": {
      "type": "string",
      "description": "Story of an episode",
      "maxLength": 400,
      "minLength": 100
    },
    "conds": {
      "type": "string",
      "description": "Conditions, required for snapping this episode",
      "maxLength": 255
    },
    "order_in_movie": {
      "type": "integer",
      "description": "Sequential order in a movie"
    },
    "guide_photo_url": {
      "type": "string",
      "description": "A photo described this episode",
      "maxLength": 2000
    },
    "id_of_movie_template": {
      "type": "integer",
      "description": "Id of a parent",
      "zref": {
        "mdl": "movie_template",
        "fld": "id",
        "del": "cascade"
      }
    }
  }
};

defs.auth_issuer = {
  "primaryKey": "id",
  "properties": {
    "id": {
      "type": "string",
      "maxLength": 10,
      "description": "Id of auth issuer, like goog or fb"
    },
    "name": {
      "type": "string",
      "maxLength": 50,
      "description": "Display name of an issuer, like Google or Facebook"
    },
    "url": {
      "type": "string",
      "maxLength": 255,
      "description": "Main url of an issuer"
    },
    "social_profile_arr": {
      "type": "array",
      "items": {
        "$ref": "social_profile"
      }
    }
  }
};

defs.social_profile = {
  "primaryKey": "id",
  "properties": {
    "id": {
      "type": "string",
      "maxLength": 255,
      "description": "Id of social profile, authIssuer id_SNID"
    },
    "snid": {
      "type": "string",
      "maxLength": 250,
      "description": "Id of social profile in social network"
    },
    "id_of_auth_issuer": {
      "type": "string",
      "maxLength": 10,
      "description": "Id of an issuer from auth_issuer table",
      "zref": {
        "mdl": "auth_issuer",
        "fld": "id",
        "del": "restrict"
      }
    },
    "id_of_user_profile": {
      "type": "integer",
      "description": "Id of user profile",
      "zref": {
        "mdl": "user_profile",
        "fld": "id",
        "del": "cascade"
      }
    },
    "display_name": {
      "type": "string",
      "maxLength": 255,
      "description": "Display name from a social network"
    },
    "first_name": {
      "type": "string",
      "maxLength": 255,
      "description": "First (given) name"
    },
    "last_name": {
      "type": "string",
      "maxLength": 255,
      "description": "Last (family) name"
    }
  }
};

defs.episode_bid = {
  primaryKey: ['id_of_episode_template', 'id_of_user_profile'],
  properties: {
    id_of_episode_template: {
      type: 'integer',
      description: 'Id of episode template'
    },
    id_of_user_profile: {
      type: 'integer',
      description: 'Id of participant, who add this bid'
    },
    created: {
      type: 'integer',
      description: 'Create date, unix timestamp'
    }
  }
};

defs.user_profile = {
  primaryKey: 'id',
  properties: {
    "id": {
      "type": "integer",
      "description": "Id of profile"
    },
    "is_blocked": {
      "type": "boolean",
      "description": "Whether the user is blocked"
    }
  }
};

defs.user_session = {
  "primaryKey": "id",
  "properties": {
    "id": {
      "type": "string",
      "maxLength": 8000,
      "description": "Id of user session"
    },
    "social_token": {
      "type": "string",
      "maxLength": 7990,
      "description": "Access token, issued by auth provider"
    },
    "id_of_social_profile": {
      "type": "string",
      "maxLength": 255,
      "description": "Id of social profile: iss_snid",
      "zref": {
        "mdl": "social_profile",
        "fld": "id",
        "del": "cascade"
      }
    },
    "id_of_auth_issuer": {
      "type": "string",
      "maxLength": 10,
      "description": "Id of auth issuer, like fb or goog",
      "zref": {
        "mdl": "auth_issuer",
        "fld": "id",
        "del": "restrict"
      }
    },
    "expires_at": {
      "type": "integer",
      "description": "When the token is expired, unix timestamp"
    },
    "created": {
      "type": "integer",
      "description": "When the session is created"
    }
  }
};

// add required for all fields
for (var i in defs) {
  for (var pkey in defs[i].properties) {
    var prop = defs[i].properties[pkey];
    if (prop.type !== 'array') {
      if (prop.required !== false) {
        prop.required = true;
      }
    }
  }
}

module.exports = defs;
