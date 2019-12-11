var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    throw new Error('Oh no!')
    res.render('index', { title: 'Express' });
  } catch(err) {
    console.log(err)
    res.status(500).json({message: err.message})
  }
});

module.exports = router;
