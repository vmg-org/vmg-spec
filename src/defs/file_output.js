module.exports = {
  primaryKey: ['id_of_media_spec', 'id_of_media_file'],
  properties: {
    id_of_media_spec: {
      type: 'integer',
      description: 'Media spec id',
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'cascade'
      }
    },
    id_of_media_file: {
      type: 'integer',
      description: 'Media file id',
      zref: {
        mdl: 'media_file',
        fld: 'id',
        del: 'cascade'
      }
    }
  }
};
