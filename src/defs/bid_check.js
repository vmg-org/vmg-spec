module.exports = {
  "primaryKey": "id_of_media_spec",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Id of a bid",
      "zref": {
        "mdl": "episode_bid",
        "fld": "id_of_media_spec",
        "del": "cascade"
      }
    },
    "is_approved": {
      "type": "boolean",
      "description": "Whether the bid is approved (true) or declined (false)"
    },
    "description": {
      "type": "string",
      "maxLength": 800,
      "description": "Message for an user if the bid is declined"
    },
    "created": {
      "type": "integer",
      "description": "When checked, unix timestamp"
    }
  }
};
