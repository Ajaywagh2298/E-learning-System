const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Lecture = new Schema({
  name: {
    type: String
  },
  subject: {
    type: String
  },
  image: {
    type: String
  },
  details: {
    type: String
  },
  date: {
    type: String
  },
  details: {
    type: String
  }
}, {
  collection: 'lecture'
})


module.exports = mongoose.model('lecture', Lecture)
