var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function (err, users) {
    res.send(users)
  });
});

router.post('/login', (req,res, next) => {
  User.findOne({
    username: req.body.name
  }, function (err, user) {

  if (err) throw err;

  if (!user) {
    res.json({ success: false, message: 'Authentication failed. User not found.' });
  } else if (user) {

    // check if password matches
    if (user.password != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Authenticated',
        data: user
      });
      }
    }
  });
});

router.post('/signup', (req, res, next) => {
  const user = req.body.name;
  const password = req.body.password;
  const contact = req.body.contact;
  const email = req.body.email;

  const _user = new User({
    username: username,
    password: password,
    contact: contact,
    email: email
  });
  _user.save(function (err) {
    if (err) {
      res.json({
        success: false,
        message: err
      })
    };
    res.json({ success: true, data: _user});
  });
})

module.exports = router;
