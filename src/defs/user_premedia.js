module.exports = {
  primaryKey: "id_of_user_profile",
  uniqueKey: [
    ['id_of_media_spec']
  ],
  properties: {
    "id_of_user_profile": {
      "type": "integer",
      "description": "Id of a profile",
      "zref": {
        mdl: "user_profile",
        fld: "id",
        del: "restrict" // When the user removed - remove all unready bids too (as another request)
      }
    },
    "id_of_media_spec": {
      "type": "integer",
      "description": "Premedia id",
      "zref": {
        mdl: "media_spec",
        fld: "id",
        del: "cascade" // when media is removed - remove this link
      }
    }
  }
};
