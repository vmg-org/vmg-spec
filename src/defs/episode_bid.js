module.exports = {
  primaryKey: 'id_of_media_spec', // User may have only one opened bid at a time (one bid without attached media spec)
  // When the user fill the bid (attach a video to episode), the bid will be closed
  // When the author (moderator) choose this bid as best vider, the bid will be removed (moves to episode_record)
  properties: {
    id_of_media_spec: {
      type: 'integer',
      description: 'Id of media spec',
      zref: {
        mdl: 'media_spec',
        fld: 'id',
        del: 'cascade'
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
    },
    moder_rating: {
      type: 'integer',
      description: 'Rating of author of the movie, best rating - to approved',
      format: 'int16'
    }
  }
};
