module.exports = {
  primaryKey: 'id',
  properties: {
    "id": {
      "type": "integer",
      "description": "Id of profile"
    },
    "is_blocked": {
      "type": "boolean",
      "description": "Whether the user is blocked"
    }
  }
};
