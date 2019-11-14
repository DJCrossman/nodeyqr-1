const express = require('express')
const port = 3000
const app = express()

app.get('/', (request, response) => {
  response.send('Hello Node.js World!')
})

app.get('/david', (request, response) => {
  response.send('Hello David')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})