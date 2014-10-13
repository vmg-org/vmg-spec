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
    "url_to_upload": {
      "type": "string",
      "description": "Url to upload the file, active during 10 seconds",
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
    },
    "progress_creation": {
      "type": "integer",
      "description": "Uploading or conversion",
      "format": "int16"
    },
    "progress_cutting": {
      "type": "integer",
      "description": "Progress of cutting, for original = 100",
      "format": "int16"
    },
    "cutting_start": {
      "type": "integer",
      "description": "Cutting time, start position, in milliseconds, for original = 0",
      "format": "int64"
    },
    "cutting_stop": {
      "type": "integer",
      "description": "Cutting time, stop position, in milliseconds, for original = duration, id duration 0 then 0 (nothing cut)",
      "format": "int64"
    },
    "is_original": {
      "type": "boolean",
      "description": "Whether the media file is original"
    }
  }
};
