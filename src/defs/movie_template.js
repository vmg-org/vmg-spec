module.exports = {
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
