module.exports = {
  primaryKey: 'id_of_media_spec',
  properties: {
    "id_of_media_spec": {
      "type": "integer",
      "description": "Id of a media spec",
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'restrict'
      }
    },
    "id_of_media_file": {
      "type": "integer",
      "description": "Id of a media file",
      "zref": {
        "mdl": "media_file",
        "fld": "id",
        "del": "cascade"
      }
    }
  }
};
