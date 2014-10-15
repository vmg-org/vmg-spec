module.exports = {
  primaryKey: 'id',
  properties: {
    "id": {
      "type": "integer",
      "description": "Id of a media file with specific multimedia container format"
    },
    "id_of_container_format": {
      "type": "string",
      "description": "Id of a container format",
      "maxLength": 100,
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
      "type": "integer",
      "format": "int64",
      "description": "Original file and cutted files have diff duration, in milliseconds"
    }
  }
};
