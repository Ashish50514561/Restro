import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  asyncGetFoodItems,
  asyncGetDrinkItems,
} from "../../Redux/actions/foodActions";
import { asyncChangeCategory } from "../../Redux/actions/DrinkActions";

export default function Categories(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleDrawer, totalBill } = props;
  const foods = useSelector((state) => state.changeReducer);
  console.log(foods);

  const handleCart = () => {
    navigate(`/cart`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const handleCategory = (e) => {
    foods
      ? dispatch(asyncGetFoodItems(e.target.name))
      : dispatch(asyncGetDrinkItems(e.target.name));
    handleDrawer();
  };

  const handleFoods = () => {
    dispatch(asyncChangeCategory(true));
    dispatch(asyncGetFoodItems());
  };

  const handleDrinks = () => {
    dispatch(asyncChangeCategory(false));
    dispatch(asyncGetDrinkItems());
  };

  const loginBtnStyles = {
    backgroundColor: "#e8e9ee",
    marginTop: "10px",
    color: "#0d6efd",
  };
  return (
    <div className="categories">
      <h5 style={{ marginBottom: "30px" }}>Categories </h5>

      <span id="drawerCart" onClick={handleCart}>
        <FontAwesomeIcon fontSize="20px" icon={faFaceSmile} />
      </span>

      <div class="btn-group" style={{ width: "80%" }}>
        <button
          class="btn categories_ item_categ"
          name="Ordinary Drink"
          onClick={handleFoods}
        >
          Foods
        </button>
        <button
          class="btn categories_ item_categ"
          name="Ordinary Drink"
          onClick={handleDrinks}
        >
          Drinks
        </button>
      </div>

      <div
        onClick={handleCategory}
        class="btn-group-vertical "
        style={{ width: "80%", paddingTop: "10px" }}
      >
        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Indian" : "Ordinary Drink"}
        >
          {foods ? "Indian" : "Drinks"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "French" : "Shot"}
        >
          {foods ? "French" : "Shotss"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "British" : "Beer"}
        >
          {foods ? "British" : "Beers"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Italian" : "Shake"}
        >
          {foods ? "Italian" : "Shakes"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Turkish" : "Cocoa"}
        >
          {foods ? "Turkish" : "Cocoass"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Chinese" : "Cocktail"}
        >
          {foods ? "Chinese" : "Cocktail"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Mexican" : "Homemade Liqueur"}
        >
          {foods ? "Mexican" : "Liqueurs"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Japanese" : "Coffee / Tea"}
        >
          {foods ? "Japanese" : "Beverages"}
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "Canadian" : "Soft Drink"}
        >
          {foods ? "Canadian" : "Soft Drink"}
        </button>
        <button
          onClick={handleCategory}
          class="btn categories_"
          name={foods ? "American" : "Punch / Party Drink"}
        >
          {foods ? "American" : "Party Drink"}
        </button>
      </div>

      {localStorage.getItem("token") ? (
        <Link to="/login">
          <button style={loginBtnStyles} onClick={handleLogout} class="btn">
            | logout |
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button style={loginBtnStyles} onClick={handleLogout} class="btn">
            | login |
          </button>
        </Link>
      )}
    </div>
  );
}
