module.exports = {
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
