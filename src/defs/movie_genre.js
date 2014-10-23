module.exports = {
  primaryKey: "id_of_movie_template",
  properties: {
    id_of_movie_template: {
      "type": "integer",
      "description": "Id of movie template",
      zref: {
        mdl: "movie_template",
        fld: "id",
        del: "cascade"
      }
    },
    id_of_genre_tag: {
      "type": "string",
      "description": "Id of genre (tag)",
      "maxLength": 50,
      "minLength": 3,
      zref: {
        mdl: "genre_tag",
        fld: "id",
        del: "restrict"
      }
    },
    color_schema: {
      "type": "string",
      "description": "Schema for current genre for this movie, like image with color picker",
      "maxLength": 8000
    }
  }
};
