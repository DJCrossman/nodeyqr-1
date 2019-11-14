const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send(`Congrats you're using your first Node.js and Express as Web Server`)
})

app.listen(port, (err) => {
  if(err) {
    console.log(`Unable to start the server on port ${port}`,err)
  }
  console.log(`This HTTP server is running on port ${port}`)
})