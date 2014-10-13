module.exports = {
  primaryKey: ['id_of_episode_template', 'id_of_media_spec'],
  properties: {
    id_of_episode_template: {
      type: 'integer',
      description: 'Id of episode template',
      zref: {
        mdl: 'episode_template',
        fld: 'id',
        del: 'restrict'
      }
    },
    id_of_media_spec: {
      type: 'integer',
      description: 'Id of media spec',
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'restrict'
      }
    },
    id_of_user_profile: {
      type: 'integer',
      description: 'Id of participant, who add this variant',
      zref: {
        mdl: 'user_profile',
        fld: 'id',
        del: 'restrict' // need to delete all media_spec too
      }
    },
    created: {
      type: 'integer',
      description: 'Create date, unix timestamp'
    },
    moder_rating: {
      type: 'integer',
      description: 'Rating of author: 0 - not checked, 1 - bad, 5 - good etc'
    }
  }
};
