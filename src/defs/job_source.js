module.exports = {
  "primaryKey": "id_of_media_spec",
  "properties": {
    "id_of_media_spec": {
      "type": "integer",
      "description": "This job for this media spec",
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'cascade'
      }
    },
    id_of_container_format: {
      "type": "string",
      maxLength: 50,
      description: 'mime type',
      zref: {
        mdl: 'container_format',
        fld: 'id',
        del: 'restrict'
      }
    },
    url_to_upload: {
      "type": "string",
      "maxLength": 2000,
      "description": "Url to upload the result file"
    },
    url_to_read: {
      type: 'string',
      maxLength: 2000,
      description: 'Url to read the resulted file'
    }
  }
};
