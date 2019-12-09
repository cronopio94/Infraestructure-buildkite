var express = require('express');
var router = express.Router();
const Item = require('../models/Item');
const getName = require('../services/itemService')
const connectToMongo = require ('../services/mongoService')

router.get('/', function(req, res, next) {
 console.log(process.env.MONGO_URL) 
connectToMongo(process.env.MONGO_URL);

  Item.find()
  .then(items => res.render('index', { items }))
  .catch(err => res.status(404).json({ msg: 'No items found' }));

});

router.post('/item/add', function(req, res, next){
  const newItem = new Item({
    name: getName(req)
  });

  newItem.save().then(() => res.redirect('/'));
})

module.exports = router;
