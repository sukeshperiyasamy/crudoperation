const mongoose = require ('mongoose')
const alienschema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    tech: {
      type: String,
      required: true
    },
    sub: {
      type: Boolean,
      required: false // set as optional
    }
  });
  
module.exports =mongoose.model('Alien',alienschema)