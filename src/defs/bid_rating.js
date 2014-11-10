module.exports = {
  "primaryKey": "id_of_media_spec",
  "properties": {
    "id_of_media_spec": {
      "type": "integer",
      "description": "Id of a bid",
      "zref": {
        "mdl": "episode_bid",
        "fld": "id_of_media_spec",
        "del": "cascade"
      }
    },
    "rating": {
      "type": "integer",
      "format": "int16",
      "description": "1, 2, 3 places"
    },
    "created": {
      "type": "integer",
      "description": "When checked, unix timestamp"
    }
  }
};
