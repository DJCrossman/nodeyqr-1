const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/user.model')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const url = 'mongodb://localhost:27017/social'

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true})

app.use(bodyParser.json())

app.get('/users', (req, res) => {
  UserModel.find({}).exec((err, users) => {
    res.json(users)
  })
})

app.get('/users/:id', (req, res) => {
  UserModel.findOne({_id: req.params.id}).exec((err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(user)
  })
})

app.post('/users', (req, res) => {
  UserModel.create(req.body, (err, user) => {
    if(err) {
      return res.status(400).json(err)
    }
    res.json(user)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})