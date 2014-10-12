module.exports = {
  primaryKey: ['id_of_episode_template', 'id_of_user_profile'],
  properties: {
    id_of_episode_template: {
      type: 'integer',
      description: 'Id of episode template'
    },
    id_of_user_profile: {
      type: 'integer',
      description: 'Id of participant, who add this bid'
    },
    created: {
      type: 'integer',
      description: 'Create date, unix timestamp'
    }
  }
};
