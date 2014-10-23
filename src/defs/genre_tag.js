module.exports = {
  primaryKey: "id",
  properties: {
    id: {
      "type": "string",
      "description": "Id of genre",
      "maxLength": 50,
      "minLength": 3
    },
    name: {
      "type": "string",
      "description": "Name of genre (tag)",
      "maxLength": 255,
      "minLength": 3
    },
    color: {
      "type": "string",
      "description": "Color of genre",
      "maxLength": 50
    }
  }
};
