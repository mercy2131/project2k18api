var express = require('express');
var router = express.Router();
const Ride = require('../models/ride.js');

/* GET home page. */
router.get('/', function(req, res, next) {
});

router.post('/book', (req,res, next) => {
  const type = req.body.type;
  const user = req.body.user;
  const distance = req.body.distance;
  const source = req.body.source;
  const destination = req.body.destination;

  const ride = new Ride({
    type: type,
    user: user,
    distance: distance,
    source: source,
    destination: destination
  });
  
  ride.save(function (err) {
    if (err) {
      res.json({
        success: false,
        data: err
      })
    };
    res.json({ success: true, data: ride });
  });
});

module.exports = router;
