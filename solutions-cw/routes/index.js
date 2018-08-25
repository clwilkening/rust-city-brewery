const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  //res.send('Hey! It works!');
  //res.send(req.query.name ? req.query.name : 'no name man');
  //res.json(req.query);
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog
  });

});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});


module.exports = router;
