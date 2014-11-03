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
      "summary": "Get top movie templates (10 newest)",
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
      }
    }
  },
  '/r1002': {
    get: {
      operationId: "r1002",
      tags: ["movie_template"],
      summary: "Get a movie_template with movie_creator_item and movie_genre_item with genre_tag_item",
      "parameters": [{
        "in": "query",
        "name": "id",
        "type": "integer",
        "description": "id of movie_template",
        "required": true
      }],
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
      summary: 'Get own user_session, including social_profile_item',
      parameters: [],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'user_session'
          }
        }
      },
      security: {}
    }
  },
  '/r1004': {
    get: {
      operationId: 'r1004',
      tags: ["file_cut"],
      summary: 'Get array of file_cut with media_file_item, created by any user',
      "parameters": [{
        "in": "query",
        "name": "id_of_media_spec",
        "type": "integer",
        "description": "id of media_spec, id of episode bid",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            $ref: pth.defs + 'file_cut'
          }
        }
      }
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
        "type": "integer",
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
        "type": "integer",
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
        "type": "integer",
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
        "type": "integer",
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
      summary: 'Get episode_template_arr, fitered by id_of_movie_template, with episode_bid_count and episode_bid_count_ready; order by order_in_movie',
      parameters: [{
        "in": "query",
        "name": "id_of_movie_template",
        "type": "integer",
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
  },
  '/r1010': {
    get: {
      operationId: 'r1010',
      tags: ['episode_bid'],
      summary: 'Get episode_bid_arr, filtered by array of id_of_episode_template; which created by current user_profile',
      parameters: [{
        "in": "query",
        "name": "id_of_episode_template_arr",
        type: "array",
        collectionFormat: "csv", //comma separated values foo,bar.
        items: {
          type: "integer"
        },
        "description": "array: id of episode template",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'episode_bid'
            }
          }
        }
      },
      security: {}
    }
  },
  '/r1011': {
    get: {
      operationId: 'r1011',
      tags: ['episode_bid'],
      summary: 'Get not-uploaded episode_bid_arr, created by current user_profile: usually it - one record (or null)',
      parameters: [],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'episode_bid'
            }
          }
        }
      },
      security: {}
    }
  },
  '/r1012': {
    get: {
      operationId: 'r1012',
      tags: ['movie_template'],
      summary: 'Get movie_template_arr where created <= now < finished, created by current user',
      parameters: [],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'movie_template'
            }
          }
        }
      },
      security: {}
    }
  },
  '/r1014': {
    get: {
      operationId: 'r1014',
      tags: ['episode_bid'],
      summary: 'Get episode_bid_arr where media_spec.is_ready = true, created by current user. With episode_template_item with movie_template_item',
      parameters: [],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'episode_bid'
            }
          }
        }
      },
      security: {}
    }
  },
  '/r1015': {
    get: {
      operationId: 'r1015',
      tags: ['episode_bid'],
      summary: 'Get episode_bid_arr where media_spec.is_ready = true, created by any user. With media_spec_item. Filtered by id_of_episode_template',
      parameters: [{
        "in": "query",
        "name": "id_of_episode_template",
        "type": "integer",
        "description": "id of episode_template",
        "required": true
      }],
      responses: {
        200: {
          description: 'Success',
          schema: {
            "type": "array",
            "items": {
              $ref: pth.defs + 'episode_bid'
            }
          }
        }
      }
      //      security: {} - usually only for author, but in this case - for all users
    }
  },
  '/r1016': {
    get: {
      operationId: 'r1016',
      tags: ['episode_template'],
      summary: 'Get episode_template_arr with episode_bid_item_best with media_spec_item with file_cut_item with media_file_item. Filtered by id_of_movie_template',
      parameters: [{
        "in": "query",
        "name": "id_of_movie_template",
        "type": "integer",
        "description": "id of movie_template",
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
