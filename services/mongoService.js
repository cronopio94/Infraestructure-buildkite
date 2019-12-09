const mongoose = require('mongoose');

const connectToMongo = mongo_url =>{
    mongoose .connect(
    mongo_url, 
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
};



module.exports = connectToMongo;