const mongoose = require('mongoose');

const continentSchema = new mongoose.Schema({
  name: String
});
module.exports = mongoose.model('continent', continentSchema);