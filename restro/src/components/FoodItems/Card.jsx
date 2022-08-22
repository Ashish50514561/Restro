import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddToCart,
  asyncDeleteCartItem,
} from "../../Redux/actions/cartActions";

export default function Card(props) {
  const [addedToCart, setAddedTocart] = useState(false);
  const { strMeal, strMealThumb, idMeal, price } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const addToCart = () => {
    const present = cart.find((item) => item.mealId === idMeal);
    if (!present) {
      const item = {
        name: strMeal,
        price: price,
        mealId: idMeal,
        image: strMealThumb,
      };
      dispatch(asyncAddToCart(item));
      swal({
        title: "Added to cart!",
        text: "Thank you!",
        icon: "success",
        button: "continue shopping!",
      });
    } else {
      swal({
        title: "Item is already in cart!",
        icon: "warning",
        button: "Add other item!",
      });
    }
  };

  return (
    <div className="mb-2 col-xs-12 col-sm-6 col-lg-4">
      <div class="card" style={{ height: "50vh" }}>
        <img class="card-img-top" src={strMealThumb} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{strMeal.substr(0, 13)}</h5>
          <span>
            <span style={{ fontWeight: "500" }}>Price - </span>${price}
          </span>

          <p class="card-text">Some quick </p>
        </div>

        <div class="card-body">
          <button className="btn btn-primary" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
