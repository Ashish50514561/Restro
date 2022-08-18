const Cart = require("../models/cart");

module.exports.add = async (req, res) => {
  const body = req.body;
  try {
    const cartItem = new Cart(body);
    const response = await cartItem.save();
    res.json({ success: "" });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.lists = async (req, res) => {
  const body = req.body;
  try {
    const cartItem = await Cart.find({ adminId: body.adminId });
    res.json({ success: cartItem });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.incQuantity = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log({ id });
  try {
    const item = await Cart.findById(id);
    const cartItem = await Cart.findByIdAndUpdate(
      id,
      { quantity: item.quantity - 1 },
      { new: true }
    );
    const cart = await Cart.find({ adminId: body.adminId });
    res.json({ success: cart });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.decQuantity = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log({ id });
  try {
    const item = await Cart.findById(id);
    const cartItem = await Cart.findByIdAndUpdate(
      id,
      { quantity: item.quantity + 1 },
      { new: true }
    );
    const cart = await Cart.find({ adminId: body.adminId });
    res.json({ success: cart });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.delete = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log({ id });
  try {
    const cartItem = await Cart.findByIdAndDelete(id);
    const cart = await Cart.find({ adminId: body.adminId });
    res.json({ success: cart });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.emptyCart = async (req, res) => {
  const id = req.body.adminId;
  try {
    const cartItem = await Cart.deleteMany({ adminId: id });
    const cart = await Cart.find({ adminId: id });
    res.json({ success: cart });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

module.exports.deleteItem = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  console.log({ id });
  try {
    const cartItem = await Cart.findOneAndDelete({ mealId: id });
    const cart = await Cart.find({ adminId: body.adminId });
    res.json({ success: cart });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};
