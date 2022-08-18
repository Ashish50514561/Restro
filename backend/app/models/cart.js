const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  image: {
    type: String,
  },
  mealId: {
    type: String,
  },
  adminId: {
    type: Schema.Types.ObjectId,
  },
});

const Cart = mongoose.model("Cart", newSchema);

module.exports = Cart;
