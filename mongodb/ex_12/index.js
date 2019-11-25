const express = require('express')
const mongoose = require('mongoose')
const SuperHeroModel = require('./models/superhero.model')
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017/comics'

mongoose.connect(url, { useNewUrlParser: true})

app.get('/', (req, res) => {
  SuperHeroModel.find({}).exec((err, superheroes) => {
    res.json(superheroes)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})