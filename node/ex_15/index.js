const express = require('express')
const port = 3000
const app = express()

const requestTime = (req, res, next) => {
  const message = `Request: ${req.baseUrl} ${Date.now()}`;
  console.log(message);
  next();
};

app.use(requestTime)

app.get('/', (req, res) => {
  res.status(200).json({
    "status": 200,
    "message": "Este request/response está OK"
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})