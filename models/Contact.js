var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  query: String,
  suggestion: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);
