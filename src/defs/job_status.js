module.exports = {
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 50,
      description: 'Id of status'
    },
    description: {
      type: 'string',
      maxLength: 800,
      description: 'Desc of status'
    }
  }
};
