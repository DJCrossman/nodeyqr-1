const express = require('express')
const port = 3000
const app = express()
var mongoose = require('mongoose');
var ContinentModel = require('./models/continent.model')

var mongoDB = 'mongodb+srv://dbUser:dbUserPassword@cluster0-73g5q.mongodb.net/public?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/public', express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req,res) => {
  (async () => {
    try {
      const continents = await ContinentModel.find().exec()
      res.render('index', {continents: continents})
    } catch (err) {
      res.status(500).send(err)
    }
  })()
})

app.listen(port, () => console.log(`Open at http://localhost:${port}`))