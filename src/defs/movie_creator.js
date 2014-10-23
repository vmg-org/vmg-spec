module.exports = {
  primaryKey: 'id_of_movie_template',
  properties: {
    id_of_movie_template: {
      type: 'integer',
      description: 'Movie',
      zref: {
        mdl: 'movie_template',
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
