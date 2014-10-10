var pth = {
  defs: '#/definitions/'
};

module.exports = {
  "/w2000": {
    "post": {
      "operationId": "w2000",
      "tags": ["movie_template"],
      "summary": "Create a movie_template with episode_template_arr",
      "parameters": [{
        "in": "body",
        "name": "body",
        "description": "movie_template with episode_template_arr",
        "schema": {
          "$ref": pth.defs + "movie_template"
        },
        "required": true
      }],
      "responses": {
        "201": {
          "description": "Success",
          "schema": {
            "$ref": pth.defs + "movie_template"
          }
        },
        "400": {
          "description": "Bad request"
        }
      },
      "security": {}
    }
  }
};
