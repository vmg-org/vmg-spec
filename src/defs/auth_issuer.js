module.exports = {
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
