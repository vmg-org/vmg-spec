module.exports = {
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
