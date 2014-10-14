module.exports = {
  primaryKey: 'id', // User may have only one opened bid at a time (one bid without attached media spec)
  // When the user fill the bid (attach a video to episode), the bid will be removed
  properties: {
    id: {
      type: 'integer',
      description: 'Id of bid'
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
    id_of_episode_template: {
      type: 'integer',
      description: 'Id of episode template',
      zref: {
        mdl: 'episode_template',
        fld: 'id',
        del: 'restrict' // if there are bids, an episode template can not be removed
      }
    },
    created: {
      type: 'integer',
      description: 'Create date, unix timestamp'
    }
  }
};
