var pth = {
  defs: '#/definitions/'
};

module.exports = {
  r1000: {
    "get": {
      "operationId": "r1000",
      "tags": ["auth_issuer"],
      "summary": "Get auth providers, include social_profile_arr for each auth provider",
      "parameters": [],
      "responses": {
        "200": {
          "description": "Success",
          "schema": {
            "type": "array",
            "items": {
              "$ref": pth.defs + 'auth_issuer'
            }
          }
        }
      }
    }
  },
  r1001: {
    "get": {
      "operationId": "r1001",
      "tags": ["movie_template"],
      "summary": "Get all movie templates",
      "parameters": [],
      "responses": {
        "200": {
          "description": "Success",
          "schema": {
            "type": "array",
            "items": {
              "$ref": pth.defs + "movie_template"
            }
          }
        }
      },
      "security": {}
    }
  },
  r1002: {
    get: {
      operationId: "r1002",
      tags: ["movie_template"],
      summary: "Get a movie_template, including episode_template_arr + episode_bid_count, episode_variant_count for each episode",
      parameters: [],
      responses: {
        200: {
          description: "Success",
          schema: {
            "$ref": pth.defs + "movie_template"
          }
        }
      }
    }
  }
};
