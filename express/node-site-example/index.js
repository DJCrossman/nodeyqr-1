const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(urlencodedParser)

const superheroes = [
  { id: 1, name: 'SPIDER-MAN', image: 'spiderman.jpg' },
  { id: 2, name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
  { id: 3, name: 'HULK', image: 'hulk.jpg' },
  { id: 4, name: 'THOR', image: 'thor.jpg' },
  { id: 5, name: 'IRON MAN', image: 'ironman.jpg' },
  { id: 6, name: 'DAREDEVIL', image: 'daredevil.jpg' },
  { id: 7, name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
  { id: 8, name: 'CAPTAIN AMERICA', image: 'captanamerica.jpg' },
  { id: 9, name: 'WOLVERINE', image: 'wolverine.jpg' },
];

app.get('/', (req, res) => {
  res.render('index', {superheroes: superheroes})
})

app.get('/superheroes/:id', (req, res) => {
  const superhero = superheroes.find((x) => {
    return x.id === +req.params.id
  })
  res.render('superhero', {superhero: superhero})
})

app.post('/superheroes', (req, res) => {
  const newId = superheroes[superheroes.length - 1].id + 1
  const newSuperHero = {
    id: newId,
    name: req.body.superhero.toUpperCase(),
    image: 'blackwidow.jpg'
  }
  superheroes.push(newSuperHero)
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})