const express = require('express')
const MongoClient = require('mongodb')
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017'

app.get('/', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true}, (err, client) => {
    if(err) {
      console.log(err)
      return
    }
    const db = client.db('comics')
    const collection = db.collection('superheroes')
    collection.find({}).toArray((err, superheroes) => {
      if(err) {
        console.log(err)
        return
      }
      client.close()
      res.json(superheroes)
    })
  })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})