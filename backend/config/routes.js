const express = require("express");
const user = require("../app/controllers/userCltr");
const cart = require("../app/controllers/cartCltr");
const {
  adminAuthentification,
} = require("../app/middlewares/authentification");
const Router = express.Router();

Router.post("/signup", user.create);
Router.post("/login", user.login);

Router.post("/addToCart", adminAuthentification, cart.add);
Router.put("/incQuantity/:id", adminAuthentification, cart.incQuantity);
Router.put("/decQuantity/:id", adminAuthentification, cart.decQuantity);
Router.delete("/cart/:id", adminAuthentification, cart.delete);
Router.delete("/cartItem/:id", adminAuthentification, cart.deleteItem);
Router.get("/emptyCart", adminAuthentification, cart.emptyCart);
Router.get("/cart", adminAuthentification, cart.lists);

module.exports = Router;
