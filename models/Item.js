const mongoose = require('mongoose');
const mongooseMongodbErrors = require('mongoose-mongodb-errors');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  parent: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
