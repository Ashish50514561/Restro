import swal from "sweetalert";
import Cartitem from "./Cartitem";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteCart, asyncGetCart } from "../../Redux/actions/cartActions";

export default function Cart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const flexStyles = { display: "flex", justifyContent: "center" };

  const totalBill =
    cart.length > 0 &&
    cart
      .map((item) => item.price * item.quantity)
      .reduce((acc, ele) => acc + ele);

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(asyncGetCart());
    }
  }, []);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div className="cart_sm_total">
        <button className="btn btn-primary btn-sm" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <h5>Total - ${totalBill}</h5>
        <button
          disabled={cart.length === 0}
          className="btn btn-primary btn-sm"
          onClick={handleOrder}
        >
          Place Order
        </button>
      </div>
      <div className="cart_heading" style={flexStyles}>
        <h5 style={{ marginBottom: "10px" }}>Your Cart</h5>
      </div>

      {cart.length === 0 && (
        <div style={flexStyles}>
          <h5 style={{ marginTop: "200px" }}>Your Cart is Empty</h5>
        </div>
      )}

      {cart.reverse().map((item) => (
        <Cartitem {...item} />
      ))}
    </div>
  );
}
