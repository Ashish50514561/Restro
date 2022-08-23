import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { asyncGetFoodItems } from "../../Redux/actions/foodActions";

export default function Categories(props) {
  const navigate = useNavigate();
  const { handleDrawer, totalBill } = props;
  const dispatch = useDispatch();

  const handleCart = () => {
    navigate(`/cart`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const handleCategory = (e) => {
    dispatch(asyncGetFoodItems(e.target.name));
    handleDrawer();
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
      {/* <div
        onClick={handleCategory}
        class="btn-group-vertical "
        style={{ width: "80%" }}
      >
        <button onClick={handleCategory} class="btn categories_" name="Indian">
          Indian
        </button>

        <button onClick={handleCategory} class="btn categories_" name="French">
          French
        </button>

        <button onClick={handleCategory} class="btn categories_" name="British">
          British
        </button>

        <button onClick={handleCategory} class="btn categories_" name="Italian">
          Italian
        </button>

        <button onClick={handleCategory} class="btn categories_" name="Turkish">
          Turkish
        </button>

        <button onClick={handleCategory} class="btn categories_" name="Chinese">
          Chinese
        </button>

        <button onClick={handleCategory} class="btn categories_" name="Mexican">
          Mexican
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name="Japanese"
        >
          Japanese
        </button>

        <button
          onClick={handleCategory}
          class="btn categories_"
          name="Canadian"
        >
          Canadian
        </button>
        <button
          onClick={handleCategory}
          class="btn categories_"
          name="American"
        >
          American
        </button>
      </div> */}

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
