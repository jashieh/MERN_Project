const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  dates: {
    type: Schema.Types.Mixed,
    default: {}
  },
});

module.exports = Cart = mongoose.model('carts', CartSchema);