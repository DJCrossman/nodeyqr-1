const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const urlencodedParser = bodyParser.urlencoded({extended: false})
const MongoClient = require('mongodb')
const ObjectID = MongoClient.ObjectID
const url = 'mongodb://localhost:27017'

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(urlencodedParser)

app.get('/', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('comics')
    const collection = db.collection('superheroes')
    collection.find({}).toArray((err, superheroes) => {
      if (err) {
        console.log(err)
        return
      }
      client.close()
      res.render('index', {superheroes: superheroes})
    })
  })
})

app.get('/superheroes/:id', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('comics')
    const collection = db.collection('superheroes')
    collection.find({
      _id: ObjectID(req.params.id)
    }).toArray((err, superheroes) => {
      if (err) {
        console.log(err)
        return
      }
      const superhero = superheroes ? superheroes[0] : null;
      client.close()
      res.render('superhero', {superhero: superhero})
    })
  })
})

app.post('/superheroes', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    const db = client.db('comics')
    const collection = db.collection('superheroes')
    collection.insertOne({
      name: req.body.superhero.toUpperCase(),
      image: 'blackwidow.jpg'
    }, (err, result) => {
      client.close()
      res.redirect('/')
    })
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})