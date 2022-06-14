const { Schema } = require('mongoose');

const vagaSchema = new Schema ({
  id: String,
  company: String,
  name: String,
  sent: Boolean,
  url: String,
  date: String,
  location: String,
});

module.exports = vagaSchema;