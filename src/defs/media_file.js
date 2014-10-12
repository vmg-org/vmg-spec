module.exports = {
  primaryKey: 'id',
  properties: {
    "id": {
      "type": "integer",
      "description": "Id of a media file with specific multimedia container format"
    },
    "id_of_media_spec": {
      "type": "integer",
      "description": "Id of a media specification",
      "zref": {
        "mdl": "media_spec",
        "fld": "id",
        "del": "cascade"
      }
    },
    "id_of_container_format": {
      "type": "string",
      "description": "Id of a container format",
      "maxLength": 25,
      "zref": {
        "mdl": "container_format",
        "fld": "id",
        "del": "restrict"
      }
    },
    "url": {
      "type": "string",
      "description": "Url to the file",
      "maxLength": 2000
    },
    "size": {
      "type": "integer",
      "description": "Size in bytes",
      "format": "int64"
    },
    "duration": {
      "type": "number",
      "description": "Original file and cutted files have diff duration"
    },
    "is_original": {
      "type": "boolean",
      "description": "Whether the media file is original"
    }
  }
};
