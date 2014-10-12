module.exports= {
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
