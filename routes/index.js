var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('../models/Item')

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  //const Item = require('./models/Item');
  Item.find()
  .then(items => res.render('index', { items }))
  .catch(err => res.status(404).json({ msg: 'No items found' }));


});

module.exports = router;
