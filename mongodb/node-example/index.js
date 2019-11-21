const MongoClient = require('mongodb')
const url = 'mongodb://localhost:27017'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  console.log('Successfully connected to server')
  const db = client.db('comics')
  const collection = db.collection('superheroes')
  collection.find({}).toArray((err, documents) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(documents)
    client.close
  })
})