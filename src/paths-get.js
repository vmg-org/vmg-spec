var pth = {
  defs: '#/definitions/'
};

module.exports = {
  '/r1000': {
    "get": {
      "operationId": "r1000",
      "tags": ["auth_issuer"],
      "summary": "Get auth providers",
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
  '/r1001': {
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
  '/r1002': {
    get: {
      operationId: "r1002",
      tags: ["movie_template"],
      summary: "Get a movie_template, including episode_template_arr + episode_bid_count + episode_bid_count_with_media for each episode",
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
  },
  '/r1003': {
    get: {
      operationId: 'r1003',
      tags: ["user_session"],
      summary: 'Get user_session, including social_profile_item',
      parameters: [],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'user_session'
          }
        }
      }
    }
  },
  '/r1004': {
    get: {
      operationId: 'r1004',
      tags: ["media_spec"],
      summary: 'Get media_spec with media_file_arr',
      "parameters": [{
        "in": "query",
        "name": "id",
        "description": "id of media_spec",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'media_spec'
          }
        }
      },
      security: {}
    }
  },
  '/r1005': {
    get: {
      operationId: 'r1005',
      tags: ['job_source'],
      summary: 'Get job_source with status and media_spec and source_file (if exists)',
      parameters: [{
        "in": "query",
        "name": "id",
        "description": "id of job_source",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'job_source'
          }
        }
      },
      security: {}
    }
  }
};
