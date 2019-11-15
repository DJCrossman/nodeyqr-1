const express = require('express')
const oneLinerJoke = require('one-liner-joke')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to the joke app!')
})

app.get('/jokes', (req, res) => {
  const jokes = oneLinerJoke.getAllJokesWithTag('IT');
  // res.send(jokes.map(j => j.body).join('\n'))
  res.json(jokes)
})

app.get('/joke', (req, res) => {
  const joke = oneLinerJoke.getRandomJoke()
  res.send(joke.body)
})

app.post('/joke', (req, res) => {
  res.send(`my jokes are too funny, I'm not getting new ones from you..`)
})

app.put('/joke', (req, res) => {
  res.send(`no, no, no.. not changing my act dude!`)
})

app.delete('/joke', (req, res) => {
  res.send(`good jokes never get to old`)
})

app.all('/joke', (req, res) => {
  res.send(`I know I'm so good that you're looking for jokes everywhere`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})