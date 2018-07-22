const mongoose = require('mongoose');
const mongooseMongodbErrors = require('mongoose-mongodb-errors');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('List', listSchema);
