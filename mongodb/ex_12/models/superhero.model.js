const mongoose = require('mongoose')

const superHeroSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  image: String
})

module.exports = mongoose.model('superheroes', superHeroSchema)