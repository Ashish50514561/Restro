import React from "react";
import Login from "../components/Forms/Login";
import Cart from "../components/FoodItems/Cart";
import Signup from "../components/Forms/Signup";
import { Routes, Route } from "react-router-dom";
import Fooditems from "../components/FoodItems/Fooditems";

export default function routes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Fooditems />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}
