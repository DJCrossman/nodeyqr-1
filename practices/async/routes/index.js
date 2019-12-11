var express = require('express');
var router = express.Router();

let after5 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success')
    }, 5000)
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  (async () => {
    let message = await after5()
    res.render('index', { title: message });
  })()
});

module.exports = router;
