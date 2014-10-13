module.exports = {
  primaryKey: ['id_of_episode_template', 'id_of_user_profile'],
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
    id_of_user_profile: {
      type: 'integer',
      description: 'Id of participant, who add this bid',
      zref: {
        mdl: 'user_profile',
        fld: 'id',
        del: 'cascade' // delete all bids, when an user removes
      }
    },
    created: {
      type: 'integer',
      description: 'Create date, unix timestamp'
    }
  }
};
