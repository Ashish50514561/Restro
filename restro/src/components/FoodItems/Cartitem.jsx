import React from "react";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import {
  asyncDecreaseQuantity,
  asyncDeleteItem,
  asyncIncreaseQuantity,
} from "../../Redux/actions/cartActions";

export default function Cartitem(props) {
  const { _id, name, price, image, mealId, quantity, handleOrder } = props;
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    if (localStorage.getItem("token")) {
      dispatch(asyncIncreaseQuantity(_id));
    } else {
      swal({
        title: "You need to login",
        icon: "warning",
        button: "Ok!",
      });
    }
  };

  const increaseQuantity = () => {
    if (localStorage.getItem("token")) {
      dispatch(asyncDecreaseQuantity(_id));
    } else {
      swal({
        title: "You need to login",
        icon: "warning",
        button: "Ok!",
      });
    }
  };

  const handleRemove = () => {
    if (localStorage.getItem("token")) {
      dispatch(asyncDeleteItem(_id));
    } else {
      swal({
        title: "You need to login",
        icon: "warning",
        button: "Ok!",
      });
    }
  };
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-5 cart_image " style={{ height: "28vh" }}>
          <img src={image} class=" rounded-start" alt="..." />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <p class="card-text">
              <div className="cartItem_details">
                <span style={{ fontWeight: "500" }}>Name - </span>
                <span>{name.substr(0, 8)}</span>
              </div>

              <div className="cartItem_details">
                <span style={{ fontWeight: "500" }}>Price - </span>
                <span>${price}</span>
              </div>

              <div className="cartItem_details">
                <span style={{ fontWeight: "500" }}>Items - </span>
                <span>
                  <button
                    className="quantity_btn"
                    disabled={quantity <= 1}
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  {quantity}
                  <button className="quantity_btn" onClick={increaseQuantity}>
                    +
                  </button>
                </span>
              </div>

              <div className="cartItem_details">
                <span style={{ fontWeight: "500" }}>Total- </span>
                <span>${price * quantity}</span>
              </div>
            </p>
            <p class="card-text">
              <button className="btn btn-primary btn-sm" onClick={handleRemove}>
                Remove
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
