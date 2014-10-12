module.exports= {
  primaryKey: 'id',
  properties: {
    id: {
      type: 'integer',
      description: 'Id of media specification'
    },
    name: {
      type: 'string',
      description: 'Name of media (from episode name or from an user)',
      maxLength: 255
    },
    created: {
      type: 'intenger',
      description: 'Created, unix timestamp'
    },
    preview_img_url: {
      type: 'string',
      description: 'Image from a video to show as thumbnail', // first cadr or random or selected by an user
      maxLength: 3200
    }
  }
};
