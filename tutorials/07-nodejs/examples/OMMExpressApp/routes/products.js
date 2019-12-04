var express = require('express');
var router = express.Router();
var data = [];
data.push(require('../../.././breakout/example-response-get-products'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(data);
});

router.post('/', function(req, res, next) {
  let body = req.body;
  console.log(body);
  data.push(body);
  res.json(data);
});

module.exports = router;
