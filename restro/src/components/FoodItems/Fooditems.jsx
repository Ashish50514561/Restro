import Cart from "./Cart";
import Card from "./Card";
import swal from "sweetalert";
import Categories from "./Categories";
import Sidedrawer from "../Drawer/Sidedrawer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { asyncDeleteCart } from "../../Redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { asyncGetFoodItems } from "../../Redux/actions/foodActions";
import SearchBoxx from "../SearchBox/SearchBox";

export default function Fooditems() {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const foodItems = useSelector((state) => state.foodReducer);
  const cart = useSelector((state) => state.cartReducer);
  console.log({ foodItems });

  const handleOrder = () => {
    if (localStorage.getItem("token")) {
      dispatch(asyncDeleteCart());
      swal({
        title: "Order Placed!",
        text: "Thank you!",
        icon: "success",
        button: "continue shopping!",
      });
    } else {
      swal({
        title: "You need to login",
        icon: "warning",
        button: "Ok!",
      });
    }
  };

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  const totalBill =
    cart.length > 0 &&
    cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, ele) => acc + ele);

  const categoriesStyle = {
    overflow: "auto",
    maxHeight: "85vh",
  };

  useEffect(() => {
    dispatch(asyncGetFoodItems());
  }, []);

  return (
    <div id="main_container">
      <Sidedrawer drawer={drawer} handleDrawer={handleDrawer} />

      <div class="col-sm main_heading" style={{ position: "relative" }}>
        <span id="drawer" onClick={handleDrawer}>
          <FontAwesomeIcon fontSize="26px" icon={faListAlt} />
        </span>

        <span className="search_">
          <SearchBoxx />
        </span>

        <span>
          <h3>Sips and Bites </h3>
        </span>
      </div>

      <div className="row g-1 ">
        <div class="col-sm-2 Ui_items g-0 category ">
          <Categories totalBill={totalBill} />
        </div>

        <div class="col-sm-6 col-md-7  Ui_items g-0 ">
          <div className="row foodItemsContainer">
            {foodItems.map((item) => (
              <Card {...item} />
            ))}
          </div>
        </div>

        <div
          class="col-sm-6 col-md-5 col-lg-3 cart  Ui_items g-0 "
          style={{
            position: "relative",
          }}
        >
          <div className="categories " style={categoriesStyle}>
            <Cart orderPlaced={orderPlaced} />
          </div>

          <div id="cart_total">
            <h5>Total - ${totalBill}</h5>
            <button
              disabled={cart.length === 0}
              className="btn btn-primary btn-sm"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
