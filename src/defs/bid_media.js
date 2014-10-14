/** 
 * Media file for a bid
 */
module.exports = {
  primaryKey: 'id_of_episode_bid',
  properties: {
    id_of_episode_bid: {
      type: 'integer',
      description: 'Id of episode bid',
      zref: {
        mdl: 'episode_bid',
        fld: 'id',
        del: 'cascade'
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
    moder_rating: {
      type: 'integer',
      description: 'Rating of author: 0 - not checked, 1 - bad, 5 - good etc',
      format: 'int16'
    }
  }
};
