const mongoose = require('mongoose');
const mongooseMongodbErrors = require('mongoose-mongodb-errors');

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  list: {
    type: mongoose.Schema.ObjectId,
    ref: 'List',
    required: 'You must supply a list'
  },
});

module.exports = mongoose.model('Item', itemSchema);
