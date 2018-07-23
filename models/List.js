const mongoose = require('mongoose');
const mongooseMongodbErrors = require('mongoose-mongodb-errors');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: String,
    required: true
  }
});




// Virtual populate in mongoose
// By default virtual fields will not be included in JSON output but data is still there?!?!
// Adds new field to schema based on a query
// listSchema.virtual('items', {
//   ref: 'Item', // reference review model
//   localField: '_id', // which field on the store
//   foreignField: 'list' // which field on the review (each review has store field to reference a particular store)
// });

module.exports = mongoose.model('List', listSchema);
