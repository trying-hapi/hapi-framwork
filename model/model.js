const mongoose = require('mongoose');

var planetSchema = new mongoose.Schema({
  name: String,
  color: String,
  size: String,
  moonsNumber: Number
});

module.exports = mongoose.model('Planet', planetSchema);
