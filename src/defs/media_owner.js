module.exports = {
  primaryKey: ['id_of_media_spec', 'id_of_user_profile'],
  properties: {
    id_of_media_spec: {
      type: 'integer',
      description: 'Object role',
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'cascade'
      }
    },
    id_of_user_profile: {
      type: 'integer',
      description: 'Subject role',
      zref: {
        mdl: 'user_profile',
        fld: 'id',
        del: 'cascade'
      }
    }
  }
};
