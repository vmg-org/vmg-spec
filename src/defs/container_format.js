module.exports = {
  primaryKey: 'id',
  properties: {
    "id": {
      "type": "string",
      "description": "Container format abbr",
      "maxLength": 100
    },
    "description": {
      "type": "string",
      "description": "Format description",
      "maxLength": 800
    }
  }
};
