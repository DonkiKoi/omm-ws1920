var express = require('express');
var cors = require('cors');
var router = express.Router();
var imagedatabase = require('../imagedatabase');

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
    res.json({"images": imagedatabase});
});

router.get('/:category',cors(), function(req, res, next) {
    let element = imagedatabase.filter(o => o.categories.includes(req.params.category));
    if(req.query.hasOwnProperty('location')) {
        element = element.filter(o => o.location.includes(req.query.location));
    }
    res.json({"images": element});
});


router.post('/:category', cors(), function(req, res, next) {
    const newImage = {
      url: req.body.url,
      categories: [
          req.params.category
      ],
      location: req.body.location
    };
    imagedatabase.push(newImage);
    res.status(201).send();
});

module.exports = router;
