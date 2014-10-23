module.exports = {
  primaryKey: "id_of_movie_template",
  properties: {
    id: {
      "type": "integer",
      "description": "Id of movie template"
    },
    name: {
      "type": "string",
      "description": "Id of genre (tag)",
      "maxLength": 50,
      "minLength": 3
    },
    color_schema: {
      "type": "string",
      "description": "Schema for current genre for this movie, like image with color picker",
      "maxLength": 8000
    }
  }
};
