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
      summary: "Get a movie_template with movie_genre_item with genre_tag_item",
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
        "name": "id_of_media_spec",
        "description": "id of job_source (media_spec too)",
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
  },
  '/r1006': {
    get: {
      operationId: 'r1006',
      tags: ['job_output'],
      summary: 'Get job_output with status and media_spec and file_output (if exists)',
      parameters: [{
        "in": "query",
        "name": "id_of_media_spec",
        "description": "id of job_output (id_of_media_spec)",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'job_output'
          }
        }
      },
      security: {}
    }
  },
  '/r1007': {
    get: {
      operationId: 'r1007',
      tags: ['job_cut'],
      summary: 'Get job_cut with status and media_spec and file_output (if exists)',
      parameters: [{
        "in": "query",
        "name": "id_of_media_spec",
        "description": "id of job_cut (id_of_media_spec)",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'job_cut'
          }
        }
      },
      security: {}
    }
  },
  '/r1008': {
    get: {
      operationId: 'r1008',
      tags: ['episode_bid'],
      summary: 'Get episode_bid with episode_template_item (with movie_template_item)',
      parameters: [{
        "in": "query",
        "name": "id_of_media_spec",
        "description": "id of episode_bid (id_of_media_spec)",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'episode_bid'
          }
        }
      }
    }
  },
  '/r1009': {
    get: {
      operationId: 'r1009',
      tags: ['episode_template'],
      summary: 'Get episode_template_arr, fitered by id_of_movie_template, with episode_bid_ready_count and episode_bid_non_ready_count',
      parameters: [{
        "in": "query",
        "name": "id_of_movie_template",
        "description": "id of movie template",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'episode_template'
            }
          }
        }
      }
    }
  }
};
