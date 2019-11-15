const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: '' });
});

app.get('/:id', (req, res) => {
  res.render('index', { title: req.params.id, products: [
    {title: 'PS4', description: 'Gaming console'},
    {title: 'XBox', description: 'Gaming console'}
  ] });
});

app.listen(3000);